import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/country.reducer';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private store: Store<AppState>) {
    this.store.dispatch({ type: '[COUNTRY] Load' });
  }
}
