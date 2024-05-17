package com.trainingapps.watchlist.eception;

public class WeatherListEmptyException extends Exception{
    public WeatherListEmptyException(String msg){
        super(msg);
    }
}
