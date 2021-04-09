import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(location: string){
    return this.http.get(
        'http://www.metaweather.com/api/location/search/?query=' + location
    );
  }
}
