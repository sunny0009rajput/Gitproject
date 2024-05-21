package com.usermanagementfeign.usermanagementfeign.services;

import com.usermanagementfeign.usermanagementfeign.FeignClient.UserClient;
import com.usermanagementfeign.usermanagementfeign.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserClient userClient;

    public UserService(UserClient userClient){
        this.userClient=userClient;
    }
    public User createUser(User user){
        return userClient.createUser(user);
    }
    public User getUser(long userId){
        return userClient.getUser(userId);
    }

    public List<User> getAllUser(){
        return userClient.getAllUser();
    }
    public User update(long userId,User UpdateUser){
       return userClient.update(userId,UpdateUser);
    }
    public void deleteUser (long userId){
        userClient.deleteUser(userId);
    };
}
