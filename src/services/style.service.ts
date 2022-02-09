import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  isDataLoaded$ = new BehaviorSubject<boolean>(true);

  constructor() { }
}
