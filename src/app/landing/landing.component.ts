import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  swiperConfig: SwiperOptions;

  constructor() {
    this.swiperConfig = {
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 'auto',
      pagination: true,
      allowTouchMove: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      }
    }
  }

  ngOnInit(): void {
  }

}
