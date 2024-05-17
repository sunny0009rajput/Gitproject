package com.trainingapps.watchlist.service;

import com.trainingapps.watchlist.dto.AddToWatchList;
import com.trainingapps.watchlist.dto.CityWeatherDetails;
import com.trainingapps.watchlist.dto.RemoveFromWatchList;
import com.trainingapps.watchlist.eception.AlreadyExistInWatchlistException;
import com.trainingapps.watchlist.eception.WeatherNotFound;
import com.trainingapps.watchlist.entity.CityWeather;
import com.trainingapps.watchlist.repository.WatchListRepository;
import com.trainingapps.watchlist.util.CityWeatherUtil;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.function.Executable;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class WatchServiceImplTest {
//    private IWatchListService service;

    @Mock
    WatchListRepository repository;  //mock of dao

    @Mock
    CityWeatherUtil util;  // mock of util class

    @Spy
    @InjectMocks
    WatchServiceImpl spy;


    /**
     * scenerio when list is return of a given userName
     * input: userName="shivam"
     * expected: List<CityWeatherDetails>
     */
    @Test
    public void list_1()
    {
        List<CityWeather> cityWeathers= mock(List.class);
        List<CityWeatherDetails> expected=mock(List.class);

        String userName="shivam";
        when(repository.findByUserName(userName)).thenReturn(cityWeathers);  //stubbing
        when(util.convertCityWeatherListToCityWeatherDetailsList(cityWeathers)).thenReturn(expected);
        List<CityWeatherDetails> result=spy.list(userName);
        assertEquals(expected,result);
        verify(repository).findByUserName(userName);
    }

    /**
     * Scenerio: weather added to watch list successfully
     * input:AddToWatchList add
     * Expexted:CityWeather returned
     */
    @Test
    public void addToWatchList_1() throws AlreadyExistInWatchlistException
    {
        AddToWatchList data = new AddToWatchList();
        data.setUserName("shivam");
        data.setCountry("IN");
        data.setName("surat");
        String id = "id1";
        doReturn(id).when(spy).generateId(data.getUserName(),data.getName(),data.getCountry());

        CityWeather cityWeather = mock(CityWeather.class);
        CityWeather savedCityWeather =mock(CityWeather.class);
        when(repository.save(cityWeather)).thenReturn(savedCityWeather);

        Optional<CityWeather> optional = Optional.empty();
        when(util.convertToCityWeather(data)).thenReturn(cityWeather);

        CityWeatherDetails details = mock(CityWeatherDetails.class);
        when(util.convertCityWeatherToCityWeatherDetails(savedCityWeather)).thenReturn(details);

        when(repository.findByUserNameAndNameAndCountry(data.getUserName(),data.getName(),data.getCountry()))
                .thenReturn(optional);

        CityWeatherDetails result =  spy.addToWatchList(data);
        assertSame(details,result);
        verify(repository).save(cityWeather);
    }

    /**
     * Scenerio: city already exist and AlreadyExistInWatchlistException is thrown
     * input:AddToWatchList add
     * @throws AlreadyExistInWatchlistException
     * Expexted:AlreadyExistInWatchlistException is thrown
     */
    @Test
    public void addToWatchList_2() throws AlreadyExistInWatchlistException
    {
        AddToWatchList add=new AddToWatchList();
        add.setCountry("IN");
        add.setName("surat");
        add.setUserName("shivam");
        String id="shivam-u-surat-u-IN";
        doReturn(id).when(spy).generateId(add.getUserName(), add.getName(), add.getCountry());
        CityWeather cityWeather=mock(CityWeather.class);
        Optional<CityWeather> optional=Optional.of(cityWeather);
        when(repository.findByUserNameAndNameAndCountry(add.getUserName(), add.getName(),add.getCountry()))
                .thenReturn(optional);
        Executable executable=()->{
            spy.addToWatchList(add);
        };
        assertThrows(AlreadyExistInWatchlistException.class,executable);
        verify(repository,never()).save(any());
    }

    /**
     * scenerio: when city weather is removed successfully
     * input: RemoveFromWatchList remove
     * @throws WeatherNotFound
     */
    @Test
    public void removeFavoriteTest_1() throws WeatherNotFound {
        RemoveFromWatchList remove=new RemoveFromWatchList();
        remove.setName("surat");
        remove.setCountry("IN");
        remove.setUserName("shivam");
        CityWeather cityWeather=mock(CityWeather.class);
        Optional<CityWeather> optional=Optional.of(cityWeather);
        when(repository.findByUserNameAndNameAndCountry(remove.getUserName(), remove.getName(),remove.getCountry())).thenReturn(optional);
        spy.removeFavorite(remove);
    }


    /**
     * scenerio: WeatherNotFound  exception is thrown
     * input: RemoveFromWatchList remove
     * @throws WeatherNotFound
     * expected:WeatherNotFound Excpetion
     */
    @Test
    public void removeFavoriteTest_2() throws WeatherNotFound
    {
        RemoveFromWatchList remove=new RemoveFromWatchList();
        remove.setUserName("shivam");
        remove.setName("surat");
        remove.setCountry("IN");
        CityWeather cityWeather=mock(CityWeather.class);
        Optional<CityWeather> optional=Optional.empty();

        when(repository.findByUserNameAndNameAndCountry(remove.getUserName(),remove.getName(),remove.getCountry())).thenReturn(optional);
        Executable executable=()->{
            spy.removeFavorite(remove);
        };
        assertThrows(WeatherNotFound.class,executable);


    }
}