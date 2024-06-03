package StreamSimpleQuestion;

import EmployeeStreamApi.Employee;

import javax.swing.text.html.Option;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

public class StreamExample {
    public static void main(String[] args) throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-YYYY");
        Date joiningDateRam = dateFormat.parse("01-01-2000");
        Date joiningDateSita = dateFormat.parse("15-05-1996");
        Date joiningDateVishnu = dateFormat.parse("21-12-1998");
        Date joiningDateMahesh = dateFormat.parse("21-03-1990");

        List<EmployeDetails> emp = Arrays.asList(
                new EmployeDetails("Ram",50000.0,joiningDateRam,"M"),
                new EmployeDetails("Sita",40000.0,joiningDateSita,"F"),
                new EmployeDetails("Vishnu",25000.0,joiningDateVishnu,"M"),
                new EmployeDetails("Mahesh",56000.0,joiningDateMahesh,"M")
        );

        // to get the highest salary
        EmployeDetails maxSalary = emp.stream().max((a,b)->Double.compare(a.getSalary(),b.getSalary())).get();
        System.out.println(maxSalary);

        // to get the second higest salary

        Optional<EmployeDetails> listEmp = emp.stream().sorted((a, b)->Double.compare(b.getSalary(),a.getSalary())).skip(1).findFirst();
        listEmp.ifPresent(System.out::println);

        // to get the oldest joining date
        EmployeDetails maxJoiningdate = emp.stream().min((a,b)->a.getJoiningDate().compareTo(b.getJoiningDate())).get();
        System.out.println(maxJoiningdate);

        // count the employee based on gender
        Map<String , Long> listEmplyoee = emp.stream().collect(Collectors.groupingBy(EmployeDetails:: getGender,Collectors.counting()));
        System.out.println(listEmplyoee);

    }
}
