package com.trainingapps.watchlist.entity;

/**
 * Class For Weather Used in CityWeather Class
 */
public class Weather {
    private String mainInfo;
    private String description;


    public String getMainInfo() {
        return mainInfo;
    }

    public void setMainInfo(String mainInfo) {
        this.mainInfo = mainInfo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
