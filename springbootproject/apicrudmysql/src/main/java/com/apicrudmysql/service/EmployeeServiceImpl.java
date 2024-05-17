package com.apicrudmysql.service;

import com.apicrudmysql.entity.Employes;
import com.apicrudmysql.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public List<Employes> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public List<Employes> getOneEmployee(long empId) {
        return employeeRepository.findAllById(Collections.singleton(empId));

    }

    @Override
    public Employes createEmployee(Employes employes) {
        return employeeRepository.save(employes);
    }

    @Override
    public Employes updateEmployees(long empId, Employes employes) {
        employes.setEmpId((long) empId);
        return employeeRepository.save(employes);
    }

    @Override
    public void deleteEmployee(long empId) {
        employeeRepository.deleteById(empId);
    }
}
