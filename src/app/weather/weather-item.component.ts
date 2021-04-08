import { Component, Input } from '@angular/core';
import { WeatherItem } from './weather-item';

@Component({
  selector: 'weather-item',
  template:`
  <article class="weather-element">
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <p class="info">{{weatherItem.description}}</p>
            </div>
            <div class="col-2">
                <span class="temp">{{weatherItem.temperature}}°C</span>
            </div>
        </article>
        `,
  styleUrls: ['../weather/weather.scss']

})

export class  WeatherItemComponent {
  @Input('item')
  weatherItem!: WeatherItem;
}
