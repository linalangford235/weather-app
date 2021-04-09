import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.scss'],
})

export class WeatherSearchComponent implements OnInit{
  public weatherSearchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any) {
    this.weatherService
      .getWeather(formValues.location)
      .subscribe(data => console.log(data));

  }

}
