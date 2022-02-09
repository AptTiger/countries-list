import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subject } from 'rxjs';
import { Country } from 'src/models/country.model';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
import { AppState } from '../reducers/country.reducer';

enum FilterType { SEARCH, REGION }

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  allCountries$: Observable<Country[]>;
  filteredCountries$ = new Observable<Country[]>();
  subsetOfCountries$ = new Subject<Country[]>();

  activeFilters: Array<(country: Country, index: number) => void>;

  constructor(private store: Store<AppState>) {
    this.allCountries$ = store.select(state => (state.countries as any).countries);
    this.filteredCountries$ = this.allCountries$;

    this.activeFilters = new Array(2);
  }

  pagedItems(items: Country[]) {
    this.subsetOfCountries$.next(items);
  }

  ngOnInit(): void { }

  searchToken;
  regionFilterToken;
  filterList(token: string, type: FilterType) {
    this.filteredCountries$ = this.allCountries$;
    const [searchFilter, regionFilter] = [0, 1];

    if (type == FilterType.SEARCH) {
      this.searchToken = token
      this.activeFilters[searchFilter] = (v) => {
        return v.name.toUpperCase().includes(token.toUpperCase());
      }
      if (token != '')
        this.filteredCountries$ = this.filteredCountries$
          .pipe(map(countries => countries.filter(this.activeFilters[searchFilter])))
    } else if (type == FilterType.REGION) {
      this.activeFilters[regionFilter] = (v) => {
        this.regionFilterToken = token
        return v.subRegion == token
      }
      if (token != '')
        this.filteredCountries$ = this.filteredCountries$
          .pipe(map(countries => countries.filter(this.activeFilters[regionFilter])))
    }

    this.store.dispatch({ type: '[COUNTRY] Reload' });
  }

  filterListBySearch(token: string) {
    this.filterList(token, FilterType.SEARCH)
  }

  filterListByRegion(token: string) {
    this.filterList(token, FilterType.REGION)
  }

}
