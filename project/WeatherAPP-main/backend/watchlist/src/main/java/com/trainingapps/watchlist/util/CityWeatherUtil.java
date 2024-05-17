package com.trainingapps.watchlist.util;

import com.trainingapps.watchlist.dto.AddToWatchList;
import com.trainingapps.watchlist.dto.CityWeatherDetails;
import com.trainingapps.watchlist.entity.CityWeather;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Class user for conversion of data from CItyWeather to CityWeatherDetails and List of CityWeather
 * To CityWeatherDetails
 * @Author Shivam Juneja
 */
@Component
public class CityWeatherUtil {


    /**
     * Method USe for converting the data From CityWeather to CityWeatherDetails
     * @param cityWeather
     * @return
     */
    public CityWeatherDetails convertCityWeatherToCityWeatherDetails(CityWeather cityWeather)
    {
        CityWeatherDetails cityWeatherDetails=new CityWeatherDetails();
        cityWeatherDetails.setWeather(cityWeather.getWeather());
        cityWeatherDetails.setId(cityWeather.getId());
        cityWeatherDetails.setCoord(cityWeather.getCoord());
        cityWeatherDetails.setTemperature(cityWeather.getTemperature());
        cityWeatherDetails.setVisibility(cityWeather.getVisibility());
        cityWeatherDetails.setUserName(cityWeather.getUserName());
        cityWeatherDetails.setName(cityWeather.getName());
        cityWeatherDetails.setCountry(cityWeather.getCountry());
        return cityWeatherDetails;
    }

    /**
     * method to convert the list of CityWeather to list of CItyWeatherDetails
     * @param cityWeatherList
     * @return
     */
    public List<CityWeatherDetails> convertCityWeatherListToCityWeatherDetailsList(List<CityWeather> cityWeatherList)
    {
        List<CityWeatherDetails> cityWeatherDetailsList=new ArrayList<>();
        for(CityWeather iterator:cityWeatherList)
        {
            CityWeatherDetails cityWeatherDetails=convertCityWeatherToCityWeatherDetails(iterator);
            cityWeatherDetailsList.add(cityWeatherDetails);
        }
        return cityWeatherDetailsList;
    }



    public CityWeather convertToCityWeather(AddToWatchList requestData){
        CityWeather cityWeather=new CityWeather();
        cityWeather.setWeather(requestData.getWeather());
        cityWeather.setCoord(requestData.getCoord());

           //auto generated id will be there
        cityWeather.setName(requestData.getName());
        cityWeather.setTemperature(requestData.getTemperature());
        cityWeather.setUserName(requestData.getUserName()); //set of user id
        cityWeather.setVisibility(requestData.getVisibility());
        cityWeather.setCountry(requestData.getCountry());
        return cityWeather;
    }
}
