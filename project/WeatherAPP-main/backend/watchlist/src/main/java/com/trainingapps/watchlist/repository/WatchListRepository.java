package com.trainingapps.watchlist.repository;

import com.trainingapps.watchlist.entity.CityWeather;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WatchListRepository extends MongoRepository<CityWeather,String> {

    Optional<CityWeather> findByUserNameAndNameAndCountry(String userName, String name,String country);

    List<CityWeather> findByUserName(String userName);

}
