import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  swiperConfig: SwiperOptions;

  constructor() {
    this.swiperConfig = {
      grabCursor: true,
      slidesPerView: 4,
      pagination: true,
      allowTouchMove: true,
      spaceBetween: 5
    }
  }

  ngOnInit(): void {
  }

}
