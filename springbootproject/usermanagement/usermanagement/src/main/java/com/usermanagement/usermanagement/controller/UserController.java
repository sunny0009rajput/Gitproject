package com.usermanagement.usermanagement.controller;

import com.usermanagement.usermanagement.entity.User;
import com.usermanagement.usermanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/api")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/alluser")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    };

    @GetMapping("/{userId}")
    public List<User> getUserById(@PathVariable("userId")long userId){
        return userService.getUserById(userId);
    };

    @GetMapping("/alluser")

    public List<User> getAllUser(){
        return userService.getAllUser();
    };

    @PutMapping("/{userId}")
    public User Update(@PathVariable("userId")long userId,@RequestBody User user){
        return userService.Update(userId,user);
    };

    @DeleteMapping("/{userId}")
    public void deleteUser (@PathVariable("userId")long userId){
        userService.deleteUser(userId);
    };
}
