import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/models/country.model';

@Component({
  selector: '[app-country-thumb]',
  templateUrl: './country-thumb.component.html',
  styleUrls: ['./country-thumb.component.scss']
})
export class CountryThumbComponent implements OnInit {
  @Input() details: Country;
  
  constructor() { }

  ngOnInit(): void {
  }

}
