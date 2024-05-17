package com.trainingapps.watchlist.dto;

import com.trainingapps.watchlist.entity.Coordinate;
import com.trainingapps.watchlist.entity.Temperature;
import com.trainingapps.watchlist.entity.Weather;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Objects;

/**
 * Request Data for adding a City Weather For a User
 */

public class AddToWatchList {
    @NotBlank
    @Length(min = 2, max = 20)
    private String userName;     //use in future as token will come from usermodule

    @NotBlank
    @Length(min = 2, max = 20)
    private String name;
    @NotNull
    private Coordinate coord;
    @NotNull
    private Weather weather;
    @NotNull
    private Temperature temperature;
    @Min(1)
    private long visibility;  // The visibilty in meter

    @NotBlank
    @Length(min=2,max=30)
    private String country;


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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AddToWatchList that = (AddToWatchList) o;
        return Objects.equals(userName, that.userName) && Objects.equals(name, that.name) && Objects.equals(country, that.country);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userName, name, country);
    }
}
