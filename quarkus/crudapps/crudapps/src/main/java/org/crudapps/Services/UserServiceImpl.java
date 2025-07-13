package org.crudapps.Services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import org.crudapps.Entity.Users;
import org.crudapps.Repository.UserRepository;

import jakarta.inject.Inject;
import java.util.List;
@ApplicationScoped
public class UserServiceImpl implements UserService{

    @Inject
    UserRepository userRepository;

    @Override
    public List<Users> getAllUsers(){
        return userRepository.listAll();
    }

    @Override
    public Users getUserById(Long id){
        return userRepository.findById(id);
    }

    @Override
    @Transactional
    public Users createUser(Users users){
        userRepository.persist(users);
        return users;
    }

    @Override
    @Transactional
    public Users updateUsers(Long id, Users users){
        Users usersdata = userRepository.findById(id);
        if(usersdata != null){
            usersdata.setEmail(users.getEmail());
            usersdata.setName(users.getName());
        }
        return usersdata;
    }

    @Override
    @Transactional
    public boolean deleteUsers(Long id) {
        return userRepository.deleteById(id);
    }
}
