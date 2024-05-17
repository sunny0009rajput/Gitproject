import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityWeather } from '../model/CityWeather';

@Injectable( {providedIn:"root"})
export class WeatherService {
  private http : HttpClient;
  constructor(private handler:HttpBackend) {

  this.http=new HttpClient(this.handler);
  }
  
  getWeatherData(cityName : string) : Observable<CityWeather>{
    return this.http.get<CityWeather>(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=69b9d6824b74d777140e366d6eee82da`);
  }
}
