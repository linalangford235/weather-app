import { Component } from '@angular/core';

@Component({
  selector: 'weather-item',
  template:`
  <article class="weather-element">
            <div class="col-1">
                <h3>Cityname</h3>
                <p class="info">CLOUDS</p>
            </div>
            <div class="col-2">
                <span class="temp">32°C</span>
            </div>
        </article>
        `,
  styleUrls: ['../weather/weather.scss']

})

export class  WeatherItemComponent {

}
