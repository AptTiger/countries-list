import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';

@NgModule({
  declarations: [CountryCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CountryCardComponent
  ]
})
export class ComponentModule { }
