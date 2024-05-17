package com.apicrudmysql.controller;

import com.apicrudmysql.entity.Employes;
import com.apicrudmysql.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class Employeescontroller {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/allemployees")
    public List<Employes> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{empId}")
    public List<Employes> getOneEmployee(@PathVariable("empId") long empId ){
        return employeeService.getOneEmployee(empId);
    }

    @PostMapping("/allemployee")
    public Employes createEmployee(@RequestBody Employes employes){
        return employeeService.createEmployee(employes);
    }

    @PutMapping("/{empId}")
    public Employes udateEmployees(@PathVariable("empId")long empId, @RequestBody Employes employes){
        return employeeService.updateEmployees(empId,employes);
    }

    @DeleteMapping("/{empId}")
    public void deleteEmployee(@PathVariable("empId") long empId){
        employeeService.deleteEmployee(empId);
    }
}
