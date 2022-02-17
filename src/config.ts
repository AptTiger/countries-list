import { InjectionToken } from "@angular/core";

export const REST_ENDPOINT = 'https://restcountries.com/v3.1/all';
export const API_ENDPOINT = new InjectionToken<string>('REST_ENDPOINT');
