import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { StoreModule } from '@ngrx/store';
import { reducer as countryReducer } from 'src/app/reducers/country.reducer';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';
import { ComponentModule } from './components/component.module';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { CountryEffects } from './effects/country.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingComponent,
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    SwiperModule,
    HttpClientModule,
    EffectsModule.forRoot([CountryEffects]),
    StoreModule.forRoot({
      countries: countryReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
