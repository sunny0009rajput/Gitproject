package com.trainingapps.watchlist.eception;

public class AlreadyExistInWatchlistException extends Exception{
    public AlreadyExistInWatchlistException(String msg)
    {
        super(msg);
    }
}
