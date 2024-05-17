package com.trainingapps.watchlist.dto;

import com.trainingapps.watchlist.entity.Coordinate;
import com.trainingapps.watchlist.entity.Temperature;
import com.trainingapps.watchlist.entity.Weather;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

/*
response dto
 */
public class CityWeatherDetails {

    private String id;
    @NotBlank
    @Length(min=2,max=20)
    private String name;
    private String country;
    private Coordinate coord;
    private Weather weather;
    private Temperature temperature;
    private long visibility; //guided by sir
    @NotBlank
    @Length(min=2,max=20)
    private String userName;


    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Coordinate getCoord() {
        return coord;
    }

    public void setCoord(Coordinate coord) {
        this.coord = coord;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }

    public Temperature getTemperature() {
        return temperature;
    }

    public void setTemperature(Temperature temperature) {
        this.temperature = temperature;
    }

    public long getVisibility() {
        return visibility;
    }

    public void setVisibility(long visibility) {
        this.visibility = visibility;
    }
}
