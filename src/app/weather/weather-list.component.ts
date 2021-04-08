import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from './weather-item.component';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item';

@Component({
  selector: 'weather-list',
  template: `
  <section class="weather-list">
    <weather-item *ngFor="let weatherItems of weatherItems" [item]="weatherItems"></weather-item>
  </section>
  `
})

export class WeatherListComponent implements OnInit{
  weatherItems: WeatherItem[] = [];

  ngOnInit(): any {
    this.weatherItems = WEATHER_ITEMS;
  }
}
