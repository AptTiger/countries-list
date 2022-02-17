import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState } from 'src/app/reducers/country.reducer';
import { API_ENDPOINT } from 'src/config';
import { StyleService } from './style.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(@Inject(API_ENDPOINT) private endpoint: string,
    private http: HttpClient, private store: Store<AppState>, private style: StyleService) {
    this.store.dispatch({ type: '[COUNTRY] Load' });
  }

  getAll() {
    let response = new Subject<any[]>();
    this.style.isDataLoaded$.next(false);

    this.http.get<any>(this.endpoint)
      .subscribe(res => {
        this.style.isDataLoaded$.next(true);
        response.next(res);
        response.complete();
      })

    return response;
  }
}
