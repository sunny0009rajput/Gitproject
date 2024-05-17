package com.trainingapps.watchlist.entity;

/**
 * class for Coordinate used in CityWeather Class
 * Author Shivam Juneja
 */

public class Coordinate {

    private double lat;   //lattitude
    private double lon;   //longitude

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }
}
