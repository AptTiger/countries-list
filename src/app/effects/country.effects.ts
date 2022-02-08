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
                    map(countries => ({
                        type: '[COUNTRY] Country Loaded',
                        payload: countries
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