import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CityWeather } from '../model/CityWeather';
import { AuthenticationService } from '../service/authentication.service';
import { WatchlistService } from '../service/watchlist.service';
import { WeatherService } from '../service/weather.service';
import { WeatherUtil } from '../util/weather.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  util:WeatherUtil=new WeatherUtil();
  errorMessage:string|undefined;
  flag:boolean=false;
  alreadyFlag:boolean=false;

  constructor(route: ActivatedRoute, private watchlistservice: WatchlistService, 
    private weatherservice: WeatherService,private service:AuthenticationService,private router:Router) { }

  
  cityName:any =this.service.getCity();
  cityWeather:CityWeather|undefined;
  weekDay=new Date().getDate();




  ngOnInit(): void {
    // this.getWeatherData(this.cityName)

    
    this.searchValue();

  }
  
  

  // private getWeatherData(cityName: string) {
  //   this.weatherservice.getWeatherData(cityName)
  //     .subscribe({
  //       next: (response) => {
  //         // this.weatherData = response;
  //         console.log(response);
  //       }
  //     });
  // }
 
  errorMessageCityNotFound:string|undefined;
  searchValue(){
    this.errorMessage=undefined;
    if(this.cityName==null){
      return;
    }
    this.weatherservice.getWeatherData(this.cityName)
    .subscribe({
      next: (response: any) => {
        this.cityWeather = this.util.toCityWeather(response);
        console.log(this.cityWeather);
      },
      error:(err:Error)=>{
        this.errorMessageCityNotFound="City is Not There";
      }
    });
    this.cityName ='';
    this.errorMessageCityNotFound=undefined;
    this.cityWeather=undefined;
    
  }


  public list: any = [];

  addToWatchList(){
    const observer:Observable<CityWeather>=this.watchlistservice.addCity(this.cityWeather);
    const myObj={
      next:(result:CityWeather)=>{
        console.log(result);
        this.list.push(result);
        console.log(this.list[0]);
        this.flag=true;
        setInterval(()=>{
          this.flag=false;
        },2000);
      },
      error:(err:Error)=>{
        // console.log("Error"+" "+err.message);
        // console.log('error received', err.message);
        let errorAlreadyExsist : string = "Http failure response for http://localhost:8580/favoriteWeather/add: 400 OK";
        if(errorAlreadyExsist === err.message.trim()){
          this.alreadyFlag=true;
        setInterval(()=>{
          this.alreadyFlag=false;
        },2000);
          // this.errorMessage=err.message;
        }
        let errorWithoutLogin:string="Http failure response for http://localhost:8580/favoriteWeather/add: 401 OK";
        if(errorWithoutLogin === err.message.trim()){
          this.router.navigate([`${"login"}`]);
          // console.log(err.message)
        }
      }
    }
    observer.subscribe(myObj);
  }

}
