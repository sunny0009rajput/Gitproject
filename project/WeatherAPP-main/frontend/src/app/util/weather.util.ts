import { CityWeather } from "../model/CityWeather";
import { Temperature } from "../model/Temperature";

export class WeatherUtil{


    toCityWeather(data:any):CityWeather{
    const cityWeather:CityWeather = new CityWeather();
    cityWeather.country=data.sys.country;
    cityWeather.name = data.name;
    cityWeather.temperature = this.toTemperature(data.main);
    cityWeather.coord = data.coord;
    cityWeather.visibility = data.visibility;
    const weatherData = data.weather[0];
    const {id,main,icon,...weather} = weatherData;
    weather.mainInfo = weatherData.main;
    cityWeather.weather = weather;
        return cityWeather;
    }


    toTemperature(data:any):Temperature{
        const temperature:Temperature = new Temperature();
        temperature.feelsLike = Math.round (data.feels_like-273.15);
        temperature.humidity = data.humidity;
        temperature.pressure = data.pressure;
        temperature.tempMax =  Math.round(data.temp_max-273.15);
        temperature.tempMin = Math.round(data.temp_min-273.15);
        temperature.temp = Math.round(data.temp-273.15);
        
        return temperature;
        }

}