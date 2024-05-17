package com.trainingapps.watchlist.service;

import com.trainingapps.watchlist.dto.AddToWatchList;
import com.trainingapps.watchlist.dto.CityWeatherDetails;
import com.trainingapps.watchlist.dto.RemoveFromWatchList;
import com.trainingapps.watchlist.eception.AlreadyExistInWatchlistException;
import com.trainingapps.watchlist.eception.WeatherNotFound;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.List;
@Validated
public interface IWatchListService {
    CityWeatherDetails addToWatchList(@Valid AddToWatchList requestData) throws AlreadyExistInWatchlistException;
    void removeFavorite(@Valid RemoveFromWatchList requestData) throws WeatherNotFound;
    List<CityWeatherDetails> list(@NotBlank String userName) ;

}
