package com.usermanagement.usermanagement.service;

import com.usermanagement.usermanagement.entity.User;

import java.util.List;

public interface UserService {
   public User createUser(User user);
   public List<User> getUserById(long userId);

   public List<User> getAllUser();
   public User Update(long userId,User UpdateUser);
    public void deleteUser (long userId);

}
