import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/country.reducer';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.dispatch({ type: '[COUNTRY] Load' });
  }

  getAll() {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all');
  }
}
