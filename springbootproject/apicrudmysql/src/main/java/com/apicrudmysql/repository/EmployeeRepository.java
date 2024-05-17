package com.apicrudmysql.repository;

import com.apicrudmysql.entity.Employes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employes, Long> {

}
