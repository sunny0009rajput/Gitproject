package com.crudapimongodb.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
@Document(collection = "studentData")
public class Student {
    @Id
    private int id;

    @Field(name = "name")
    private String name;

    @Field(name ="age" )
    private int age;

    @Field(name = "rollno")
    private int rollno;

    public Student() {
    }

    public Student(int id, String name, int age, int rollno) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.rollno = rollno;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getRollno() {
        return rollno;
    }

    public void setRollno(int rollno) {
        this.rollno = rollno;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", rollno=" + rollno +
                '}';
    }
}
