package EmployeeStreamApi;

import java.util.ArrayList;
import java.util.List;

public class StreamOperations {
    public static void main(String[] args) {
        List<Employee> employees=employeeList();
        
    }










    public static List<Employee> employeeList(){
        List<Employee> employeeList=new ArrayList<>();
        employeeList.add(new Employee(1,"one","Hyderabad",32,"female","HR",2011,25000.0));
        employeeList.add(new Employee(2,"two","Hyderabad",38,"male","Development",2010,28000.0));
        employeeList.add(new Employee(3,"three","Pune",28,"female","Finance",2009,29000.0));
        employeeList.add(new Employee(4,"four","Pune",45,"male","Security",2018,27000.0));
        employeeList.add(new Employee(5,"five","Hyderabad",28,"male","Infrastructure",2019,26000.0));
        employeeList.add(new Employee(6,"six","Hyderabad",19,"male","Sales",2015,25000.0));
        employeeList.add(new Employee(7,"seven","Pune",56,"female","HR",2016,24000.0));
        employeeList.add(new Employee(8,"eight","Pune",30,"female","Development",2017,23000.0));
        employeeList.add(new Employee(9,"nine","Hyderabad",38,"male","Finance",2015,22000.0));
        employeeList.add(new Employee(10,"ten","Hyderabad",27,"female","Security",2014,21000.0));
        return employeeList;
    }
}
