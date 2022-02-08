import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Country } from 'src/models/country.model';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
import { AppState } from '../reducers/country.reducer';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  swiperConfig: SwiperOptions;
  allCountries$: Observable<any>;
  countries$: Subject<Country[]>;

  constructor(private store: Store<AppState>) {
    this.allCountries$ = store.select(state => state.countries);
    this.countries$ = new Subject();

    this.swiperConfig = {
      grabCursor: true,
      slidesPerView: 4,
      pagination: true,
      allowTouchMove: true,
      spaceBetween: 5
    }
  }

  pagedItems(items: Country[]) {
    this.countries$.next(items);
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[COUNTRY] Load' });
    // TODO action is called twice
  }

}
