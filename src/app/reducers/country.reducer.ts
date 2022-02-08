import { Country } from "src/models/country.model";
import * as actions from "src/app/actions/country.actions"
import { Action, createReducer, on } from "@ngrx/store";

export interface AppState {
    readonly countries: Country[]
}

const initialState: AppState = { countries: [] }

const countryReducer = createReducer(
    initialState,
    on(actions.reloadCountries, state => ({ ...state })),
    on(actions.loadedCountries, (state, { payload }) => ({ ...state, countries: payload })),
);

export function reducer(state: AppState | undefined, action: Action) {
    return countryReducer(state, action);
}