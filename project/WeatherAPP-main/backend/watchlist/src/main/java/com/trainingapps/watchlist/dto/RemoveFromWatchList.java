package com.trainingapps.watchlist.dto;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import java.util.Objects;

public class RemoveFromWatchList {
    @NotBlank
    @Length(min=2,max=20)
    private String name;

    @NotBlank
    @Length(min=2,max=20)
    private String userName;

    private String country;

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RemoveFromWatchList that = (RemoveFromWatchList) o;
        return Objects.equals(name, that.name) && Objects.equals(userName, that.userName) && Objects.equals(country, that.country);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, userName, country);
    }
}
