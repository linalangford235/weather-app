import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from './weather/weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
