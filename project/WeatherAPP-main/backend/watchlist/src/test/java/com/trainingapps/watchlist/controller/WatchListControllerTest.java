package com.trainingapps.watchlist.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.trainingapps.watchlist.dto.AddToWatchList;

import com.trainingapps.watchlist.dto.CityWeatherDetails;
import com.trainingapps.watchlist.dto.RemoveFromWatchList;
import com.trainingapps.watchlist.eception.AlreadyExistInWatchlistException;

import com.trainingapps.watchlist.eception.WeatherNotFound;
import com.trainingapps.watchlist.entity.Coordinate;
import com.trainingapps.watchlist.entity.Temperature;
import com.trainingapps.watchlist.entity.Weather;

import com.trainingapps.watchlist.service.IWatchListService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(WatchListController.class)
class WatchListControllerTest {

    private CityWeatherDetails cityWeatherDetails;
    private Temperature temperature;
    private Coordinate coord;
    private Weather weather;

    @MockBean
    IWatchListService service;

    @Autowired
    MockMvc mvc;

    @BeforeEach
    public void setup(){
        coord = new Coordinate();
        coord.setLon(23.432);
        coord.setLat(18.823);

        temperature = new Temperature();
        temperature.setPressure(100298);
        temperature.setTemp(39);
        temperature.setTempMin(37);
        temperature.setTempMax(40);
        temperature.setHumidity(102);
        temperature.setFeelsLike(40);

        weather = new Weather();
        weather.setDescription("broken clouds");
        weather.setMainInfo("Clouds");

        cityWeatherDetails = new CityWeatherDetails();
//        cityWeatherDetails.setCityId(104924);
        cityWeatherDetails.setName("Vadodara");
        cityWeatherDetails.setWeather(weather);
        cityWeatherDetails.setCoord(coord);
        cityWeatherDetails.setTemperature(temperature);
        cityWeatherDetails.setVisibility(10002);
        cityWeatherDetails.setCountry("IN");

    }

    @AfterEach
    public void reset(){
        cityWeatherDetails = null;
    }

    /**
     * scenario: When userName is founded successfully
     * input : userName = "sample"
     * expectation: List of CityWeatherDetails is returned as response. status 200/OK
     */

    @Test
    public void testCityWeatherDetailsList_1() throws  Exception{
        String userName = "sample";

        List<CityWeatherDetails> cityWeatherDetailsList =  new ArrayList<>();
        cityWeatherDetailsList.add(cityWeatherDetails);

        when(service.list(userName)).thenReturn(cityWeatherDetailsList);
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(cityWeatherDetailsList);
        String url = "/favoriteWeather/findByUserName/"+userName;
        mvc.perform(get(url))
                .andExpect(status().isOk())
                .andExpect(content().json(json));
    }

    /**
     * scenario: When city weather is added successfully
     * input : AddToWatchlist
     * expectation:  weather is added successfully. status 200/OK
     */
    @Test
    public void testAddCity_1() throws Exception {

        AddToWatchList request = new AddToWatchList();
        request.setUserName("sample");
        request.setName("Vadodara");
        request.setCountry("IN");
        request.setVisibility(10002);
//        request.setCityId(104924);
        request.setWeather(weather);
        request.setTemperature(temperature);
        request.setCoord(coord);
        when(service.addToWatchList(request)).thenReturn(cityWeatherDetails);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(request);
        String jsonResponse = objectMapper.writeValueAsString(cityWeatherDetails);
        String url = "/favoriteWeather/add";
        mvc.perform(post(url)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isOk())
                .andExpect(content().json(jsonResponse));
        verify(service).addToWatchList(request);

    }
//
    /**
     * scenario: When city weather is already exists
     * input : AddToWatchlist
     * expectation:  throws AlreadyExistInWatchListException . status 409/Found
     */
    @Test
    public void testAddCity_2() throws Exception {

        String message = "already exist";
        AlreadyExistInWatchlistException  alreadyExist = new AlreadyExistInWatchlistException(message);

        AddToWatchList request = new AddToWatchList();
        request.setUserName("sample");
        request.setName("Vadodara");
        request.setCountry("IN");
        request.setVisibility(10002);
//        request.setCityId(104924);
        request.setWeather(weather);
        request.setTemperature(temperature);
        request.setCoord(coord);
        when(service.addToWatchList(request)).thenThrow(alreadyExist);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(request);
        String url = "/favoriteWeather/add";
        mvc.perform(post(url)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isBadRequest())
                .andExpect(content().string(message));
        verify(service).addToWatchList(request);

    }
//
    /**
     * scenario: When weather is removed successfully
     * input : RemoveFromWatchlist
     * expectation:  Track is removed successfully. status 200/OK
     */
    @Test
    public void testRemove_1() throws Exception {

        RemoveFromWatchList request = new RemoveFromWatchList();
        request.setUserName("sample");
        request.setName("Vadodara");
        request.setCountry("IN");

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(request);

        String url = "/favoriteWeather/delete";
        mvc.perform(delete(url).contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isOk());
        verify(service).removeFavorite(request);
    }
//
    /**
     * scenario: When track is not found
     * input : RemovedFavouriteRequest
     * expectation:  NoTrackFoundException. status 404/NOT_FOUND
     */
    @Test
    public void testRemove_2() throws Exception {
        RemoveFromWatchList request = new RemoveFromWatchList();
        request.setUserName("sample");
        request.setName("Vadodara");
        request.setCountry("IN");
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonRequest = objectMapper.writeValueAsString(request);
        String url = "/favoriteWeather/delete";

        String message = "weather not found";
        WeatherNotFound e = new WeatherNotFound(message);
        doThrow(e).when(service).removeFavorite(request);
        mvc.perform(delete(url)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonRequest))
                .andExpect(status().isNotFound())
                .andExpect(content().string(message));
        verify(service).removeFavorite(request);
    }

}