import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityWeather } from '../model/CityWeather';
import { WatchlistService } from '../service/watchlist.service';

@Component({
  selector: 'app-list-cities-weather',
  templateUrl: './list-cities-weather.component.html',
  styleUrls: ['./list-cities-weather.component.css']
})
export class ListCitiesWeatherComponent implements OnInit {

  public citiesWeather : any = [];
  constructor(private watchlistservice : WatchlistService) { }

  ngOnInit(): void {
    
    this.getFavrtList();

  }

  // removeItem(item:any){
  //   this.watchlistservice.removeCity();
  // }
  list:CityWeather[]|undefined;

  getFavrtList(){
    const observer:Observable<CityWeather[]>=this.watchlistservice.cityWeatherDetailsList();
    const myObj={
      next:(result:CityWeather[])=>{
        this.list=result;
        console.log(this.list);
      }
    }
    observer.subscribe(myObj);

  }

  removeWeather(name:string,country:string){
    const userName : string = localStorage.getItem('username');
    const observer:Observable<CityWeather>=this.watchlistservice.removeCity(name,userName,country);
    const myObj={
      next:(result:CityWeather)=>{
        this.ngOnInit();
        console.log(result);
      }
    }
    observer.subscribe(myObj);
  }

}
