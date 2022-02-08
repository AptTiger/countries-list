import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CountryService } from 'src/services/country.service';

@Injectable()
export class CountryEffects {

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[COUNTRY] Load'),
            mergeMap(() => this.countryService.getAll()
                .pipe(
                    map(rawCountries => ({
                        type: '[COUNTRY] Country Loaded',
                        payload: rawCountries.map(country => {
                            return {
                                name: country.name?.common,
                                code: country.cca3,
                                region: country.region,
                                subRegion: country?.subregion,
                                borders: country?.borders,
                                population: country?.population,
                                map: Object.values(country.maps)[0],
                                flag: Object.values(country.flags)[0],
                                coatOfArms: Object.values(country.coatOfArms)[0],
                                timezone: country.timezones[0]
                            }
                        })
                    })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private countryService: CountryService
    ) { }
}