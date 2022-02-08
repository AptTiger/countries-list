import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input() details: Country;

  constructor() { }

  ngOnInit(): void {
  }

}
