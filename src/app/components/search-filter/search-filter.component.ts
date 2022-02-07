import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  isShowDropdown: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.isShowDropdown = !this.isShowDropdown;
  }

}
