import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, map, Observable, ReplaySubject, Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/reducers/country.reducer';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  isShowDropdown: boolean = false;
  inputTextChanged = new Subject<Event>();
  countryRegions$ = new Observable<any[]>();
  private subscriptions$: ReplaySubject<boolean> = new ReplaySubject(1);

  @Output() searchTermEntered = new EventEmitter();
  @Output() regionFilterSet = new EventEmitter();

  constructor(private store: Store<AppState>) {
    this.countryRegions$ = store.select(state => (state.countries as any).countries)
      .pipe(map(countries => {
        return [...new Set(countries.map(country => country.subRegion))]
      }))
  }

  ngOnInit(): void {
    this.inputTextChanged.pipe(
      map(e => (e.target as HTMLInputElement).value),
      debounceTime(100),
      takeUntil(this.subscriptions$)
    ).subscribe(text => {
      this.searchTermEntered.emit(text);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions$.next(true);
    this.subscriptions$.complete();
  }

  toggleDropdown(): void {
    this.isShowDropdown = !this.isShowDropdown;
  }

  inputChanged(inputChangeEvent: Event) {
    this.inputTextChanged.next(inputChangeEvent);
  }

  filterByRegion(region: string) {
    this.regionFilterSet.emit(region);
  }

}
