import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SvgComponent } from './svg/svg.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CountryThumbComponent } from './country-thumb/country-thumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CountryCardComponent, NavbarComponent, SearchFilterComponent, SvgComponent, FooterComponent, PaginationComponent, CountryThumbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SvgComponent,
    CountryCardComponent,
    NavbarComponent,
    SearchFilterComponent,
    PaginationComponent,
    CountryThumbComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
