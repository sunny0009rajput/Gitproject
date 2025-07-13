package org.crudapps.Repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.crudapps.Entity.Users;
@ApplicationScoped
public class UserRepository implements PanacheRepository<Users> {
}
