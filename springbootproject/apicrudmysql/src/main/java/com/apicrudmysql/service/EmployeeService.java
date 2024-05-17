package com.apicrudmysql.service;

import com.apicrudmysql.entity.Employes;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface EmployeeService {
    public List<Employes> getAllEmployees();
    public List<Employes> getOneEmployee(long empId);
    public Employes createEmployee(Employes employes);
    public Employes updateEmployees(long empId,Employes employes);
    public void deleteEmployee(long empId);


}
