package com.apicrudmysql.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employedata")
public class Employes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;
    @Column(name = "name")
    private String empName;

    @Column(name = "salary")
    private Long salary;

    @Column(name = "age")
    private int age;

    @Column(name = "city")
    private String cityName;

    public Employes() {
    }

    public Employes(Long empId, String empName, Long salary, int age, String cityName) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
        this.age = age;
        this.cityName = cityName;
    }

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    @Override
    public String toString() {
        return "Employes{" +
                "empId=" + empId +
                ", empName='" + empName + '\'' +
                ", salary=" + salary +
                ", age=" + age +
                ", cityName='" + cityName + '\'' +
                '}';
    }
}
