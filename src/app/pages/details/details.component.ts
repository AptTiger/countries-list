import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, pluck, ReplaySubject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/reducers/country.reducer';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  country$ = new Observable<Country>();
  neighbors$ = new Observable<Country[]>();
  allCountries$ = new Observable<Country[]>();
  private borders = new Array<string>();
  private subscriptions$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.allCountries$ = store.select(state => (state.countries as any).countries);
  }

  ngOnInit(): void {
    let countryCode: string;
    this.route.paramMap
      .pipe(takeUntil(this.subscriptions$))
      .subscribe(paramMap => {
        countryCode = paramMap.get('countryCode')
        this.country$ = this.allCountries$.pipe(
          map(countries => countries.find(c => c.code == countryCode))
        )
      })

    this.country$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe(country => {
        this.borders = country?.borders;
        this.store.dispatch({ type: '[COUNTRY_HISTORY] Add', newCountry: country })
      });

    this.neighbors$ = this.allCountries$.pipe(
      map(countries => countries.filter(c => this.borders?.includes(c.code)))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.next(true);
    this.subscriptions$.complete();
  }

}
