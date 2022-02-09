import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, ReplaySubject, Subject, take, takeUntil } from 'rxjs';
import { AppState } from 'src/app/reducers/country.reducer';
import { Country } from 'src/models/country.model';
import { DateTime } from 'luxon';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  country$ = new Observable<Country>();
  neighbors$ = new Observable<Country[]>();
  allCountries$ = new Observable<Country[]>();
  countryTime$ = new Subject<Date>();
  countryDate$ = new Subject<Date>();
  mapUrl: SafeUrl = null;
  private borders = new Array<string>();
  private subscriptions$: ReplaySubject<boolean> = new ReplaySubject(1);
  private stopInterval;

  constructor(private route: ActivatedRoute, private store: Store<AppState>,
    private sanitizer: DomSanitizer) {
    this.allCountries$ = store.select(state => (state.countries as any).countries);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.subscriptions$))
      .subscribe(paramMap => {
        // cleanups
        this.hasRan = false;
        clearInterval(this.stopInterval);

        let countryCode = paramMap.get('countryCode')
        this.country$ = this.allCountries$.pipe(
          map(countries => countries.find(c => c.code == countryCode))
        );

        this.country$
          .pipe(takeUntil(this.subscriptions$))
          .subscribe(country => {
            this.borders = country?.borders;
            this.store.dispatch({ type: '[COUNTRY_HISTORY] Add', newCountry: country });
            this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://www.google.com/maps?q=${country?.name}&output=embed`
            );

            // get +05 from UTC+05:00
            let reformatTimeZone: any = country?.timezone.slice(3, 6);
            // ensure it's numeric before prceeding
            if (!(reformatTimeZone = parseInt(reformatTimeZone)))
              return

            this.runOnce(() => {
              let time = DateTime.now().toUTC().plus({ hours: reformatTimeZone });
              this.countryDate$.next(time.toJSDate());
              this.stopInterval = setInterval(() => { // tick seconds
                time = time.plus({ seconds: 1 });
                this.countryTime$.next(time.toJSDate());
              }, 1000)
            })
          });

        this.neighbors$ = this.allCountries$.pipe(
          map(countries => countries.filter(c => this.borders?.includes(c.code)))
        );
      })
  }

  ngOnDestroy(): void {
    this.subscriptions$.next(true);
    this.subscriptions$.complete();
    clearInterval(this.stopInterval);
  }

  hasRan = false;
  runOnce(once) {
    if (!this.hasRan) once();
    this.hasRan = true;
  }

}
