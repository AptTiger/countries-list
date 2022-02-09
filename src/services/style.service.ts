import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  isDataLoaded$ = new BehaviorSubject<boolean>(true);
  isDay: boolean = true;

  constructor() { }

  setDay(): void {
    this.isDay = true;
    document.documentElement.style.setProperty('--scheme-main', 'white');
    document.documentElement.style.setProperty('--text', 'hsl(0, 0%, 29%)');
    document.documentElement.style.setProperty('--pagination-color', 'hsl(0, 0%, 21%)');
    document.documentElement.style.setProperty('--pagination-hover-color', 'hsl(0, 0%, 21%)');
    document.documentElement.style.setProperty('--button-color', 'hsl(0, 0%, 21%)');
    document.documentElement.style.setProperty('--button-hover-color', 'hsl(0, 0%, 21%)');
    document.documentElement.style.setProperty('--input-color', 'hsl(0, 0%, 21%)');
    document.documentElement.style.setProperty('--input-placeholder-color', 'hsl(0, 0%, 21%)');
    document.documentElement.style.setProperty('--title-color', 'var(--link)');
    document.documentElement.style.setProperty('--footer-background-color', 'var(--scheme-main)');
    document.documentElement.style.setProperty('--film', '#f7f7f7');
  }

  setNight(): void {
    this.isDay = false;
    document.documentElement.style.setProperty('--scheme-main', 'rgb(63, 63, 63)');
    document.documentElement.style.setProperty('--text', 'white');
    document.documentElement.style.setProperty('--pagination-color', 'white');
    document.documentElement.style.setProperty('--pagination-hover-color', 'white');
    document.documentElement.style.setProperty('--button-color', 'white');
    document.documentElement.style.setProperty('--button-hover-color', 'white');
    document.documentElement.style.setProperty('--input-color', 'white');
    document.documentElement.style.setProperty('--input-placeholder-color', 'white');
    document.documentElement.style.setProperty('--title-color', 'var(--link)');
    document.documentElement.style.setProperty('--footer-background-color', 'var(--scheme-main)');
    document.documentElement.style.setProperty('--film', '#555555');
  }

  switchTheme(): void {
    if (this.isDay) this.setNight()
    else this.setDay();
  }
}
