package org.crudapps.Services;

import org.crudapps.Entity.Users;
import java.util.List;
public interface UserService {
    List<Users> getAllUsers();
    Users getUserById(Long id);
    Users createUser(Users users);
    Users updateUsers(Long id, Users users);
    boolean deleteUsers(Long id);

}
