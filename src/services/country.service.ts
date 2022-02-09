import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/country.reducer';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(@Inject('API_ENDPOINT') private endpoint: string,
    private http: HttpClient, private store: Store<AppState>) {
    this.store.dispatch({ type: '[COUNTRY] Load' });
  }

  getAll() {
    return this.http.get<any[]>(this.endpoint);
  }
}
