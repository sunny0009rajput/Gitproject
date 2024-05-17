package com.trainingapps.watchlist.controller;

import com.trainingapps.watchlist.dto.AddToWatchList;
import com.trainingapps.watchlist.dto.CityWeatherDetails;
import com.trainingapps.watchlist.dto.RemoveFromWatchList;
import com.trainingapps.watchlist.eception.AlreadyExistInWatchlistException;
import com.trainingapps.watchlist.eception.WeatherListEmptyException;
import com.trainingapps.watchlist.eception.WeatherNotFound;
import com.trainingapps.watchlist.service.IWatchListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favoriteWeather")
public class WatchListController {
    @Autowired
    private IWatchListService service;

    @PostMapping("/add")
    public CityWeatherDetails add(@RequestBody AddToWatchList requestData) throws AlreadyExistInWatchlistException
    {
        CityWeatherDetails desired=service.addToWatchList(requestData);
        return desired;
    }

    @GetMapping("/findByUserName/{userName}")
    public List<CityWeatherDetails> cityWeatherDetailsList(@PathVariable String userName) throws WeatherListEmptyException
    {
        List<CityWeatherDetails> listOfCityWeather=service.list(userName);
        return  listOfCityWeather;
    }

    @DeleteMapping("/delete")
    public void removeFavoriteCityWeather(@RequestBody RemoveFromWatchList requestData) throws WeatherNotFound {

        service.removeFavorite(requestData);
    }

}
