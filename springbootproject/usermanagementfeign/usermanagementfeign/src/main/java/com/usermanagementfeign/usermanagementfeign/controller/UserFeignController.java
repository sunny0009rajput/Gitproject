package com.usermanagementfeign.usermanagementfeign.controller;


import com.usermanagementfeign.usermanagementfeign.FeignClient.UserClient;
import com.usermanagementfeign.usermanagementfeign.entity.User;
import com.usermanagementfeign.usermanagementfeign.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/api")
public class UserFeignController {

    @Autowired
    private UserService userService;

    public UserFeignController(UserService userService){
        this.userService=userService;
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable("userId") Long userId){
        return userService.getUser(userId);
    }

    @GetMapping
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PutMapping("/{userId}")
    public User update(@PathVariable("userId") Long userId, @RequestBody User user){
        return userService.update(userId,user);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        userService.deleteUser(userId);
    }
}
