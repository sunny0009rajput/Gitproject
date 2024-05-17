package com.trainingapps.watchlist.service;

import com.trainingapps.watchlist.dto.AddToWatchList;
import com.trainingapps.watchlist.dto.CityWeatherDetails;
import com.trainingapps.watchlist.dto.RemoveFromWatchList;
import com.trainingapps.watchlist.eception.AlreadyExistInWatchlistException;
import com.trainingapps.watchlist.eception.WeatherNotFound;
import com.trainingapps.watchlist.entity.CityWeather;
import com.trainingapps.watchlist.repository.WatchListRepository;
import com.trainingapps.watchlist.util.CityWeatherUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation For Watch List Service
 *
 */
@Service
public class WatchServiceImpl implements IWatchListService{
    @Autowired
    private WatchListRepository dao;
    @Autowired
    private CityWeatherUtil util;

    public String generateId(String userName,String name,String country) {
        String id = userName+"-u-"+name+ "-u-"+country;
        return id;
    }

    /**
     * Saves  favorited City Weather Information For a user and returns WeatherDetails,
     * If User has already favorited the city weather information then AlreadyExistInWatchlistException is thrown
     * @param
     * @return CityWeatherDetails
     * @throws AlreadyExistInWatchlistException If City Already Exist For a User
     */


    @Override
    public CityWeatherDetails addToWatchList(AddToWatchList requestData) throws AlreadyExistInWatchlistException {

        String generatedId = generateId(requestData.getUserName(),requestData.getName(),requestData.getCountry());
        Optional<CityWeather> cityWeatherOptional=dao.findByUserNameAndNameAndCountry(requestData.getUserName(),requestData.getName(),
                requestData.getCountry());
        if(cityWeatherOptional.isPresent()){
            throw new AlreadyExistInWatchlistException("already exist");
        }

        CityWeather cityWeather=util.convertToCityWeather(requestData);
        cityWeather.setId(generatedId);
        cityWeather=dao.save(cityWeather);
        CityWeatherDetails cityWeatherDetails=util.convertCityWeatherToCityWeatherDetails(cityWeather);
        return cityWeatherDetails;
    }


    /**
     * Remove the  weather from the favorite list
     *
     * @param requestData
     * @throws WeatherNotFound
     */
    @Override
    public void removeFavorite(RemoveFromWatchList requestData) throws WeatherNotFound {
        Optional<CityWeather> optional=dao.findByUserNameAndNameAndCountry(requestData.getUserName(),requestData.getName(),requestData.getCountry());
        if(!optional.isPresent()){
            throw new WeatherNotFound("weather is not there");
        }
        CityWeather cityWeather=optional.get();
        dao.delete(cityWeather);
    }

    /**
     * Return the list of favorited added Item of a user
     * @param userName
     * @return
     */
    @Override
    public List<CityWeatherDetails> list(String userName)   {
        List<CityWeather> cityWeathers=dao.findByUserName(userName);
        List<CityWeatherDetails> cityWeatherDetailsList=util.convertCityWeatherListToCityWeatherDetailsList(cityWeathers);
        return cityWeatherDetailsList;

    }
}
