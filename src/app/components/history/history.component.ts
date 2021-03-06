import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers/country.reducer';
import { Country } from 'src/models/country.model';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {
  history$ = new Observable<Country[]>();
  swiperConfig: SwiperOptions;

  constructor(private store: Store<AppState>) {
    this.history$ = store.select(state => (state.countries as any).history);

    this.swiperConfig = {
      grabCursor: true,
      slidesPerView: 4,
      pagination: true,
      allowTouchMove: true,
      spaceBetween: 10
    }
  }

  ngOnInit(): void {
  }

}
