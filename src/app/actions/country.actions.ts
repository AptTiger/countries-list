import { createAction, props } from "@ngrx/store";
import { Country } from "src/models/country.model";

export const loadCountries = createAction('[COUNTRY] Load');
export const loadedCountries = createAction(
    '[COUNTRY] Country Loaded',
    props<{ payload: Country[] }>()
);
