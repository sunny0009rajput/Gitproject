package com.usermanagement.usermanagement.service;

import com.usermanagement.usermanagement.entity.User;
import com.usermanagement.usermanagement.repository.UserRepository;
import org.hibernate.sql.model.jdbc.UpsertOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUserById(long userId) {
        return userRepository.findAllById(Collections.singleton(userId));
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User Update(long userId, User UpdateUser) {
        UpdateUser.setUserId((Long)userId);

        return userRepository.save(UpdateUser);
    }

    @Override
    public void deleteUser(long userId) {
        userRepository.deleteById(userId);

    }
}
