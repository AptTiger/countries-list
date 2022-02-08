import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  countries$: Observable<Country[]>;

  constructor(private store: Store<AppState>) {
    this.countries$ = store.select(state => state.countries);
    this.countries$.subscribe(c => console.log(c))

    this.swiperConfig = {
      grabCursor: true,
      slidesPerView: 4,
      pagination: true,
      allowTouchMove: true,
      spaceBetween: 5
    }
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[COUNTRY] Load' });
  }

}
