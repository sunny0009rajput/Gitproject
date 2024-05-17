package com.trainingapps.watchlist.controller;


import com.trainingapps.watchlist.eception.AlreadyExistInWatchlistException;
import com.trainingapps.watchlist.eception.WeatherListEmptyException;
import com.trainingapps.watchlist.eception.WeatherNotFound;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CenteralizedException {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(WeatherNotFound.class)
    public String handleWeatherNotFound(WeatherNotFound e)
    {
        String msg=e.getMessage();
        return msg;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(AlreadyExistInWatchlistException.class)
    public String handAlreadyExistInWatchListException(AlreadyExistInWatchlistException e)
    {
        String msg=e.getMessage();
        return msg;
    }

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(WeatherListEmptyException.class)
    public String handleWeatherListEmptyException(WeatherListEmptyException e)
    {
        String msg=e.getMessage();
        return msg;
    }

}
