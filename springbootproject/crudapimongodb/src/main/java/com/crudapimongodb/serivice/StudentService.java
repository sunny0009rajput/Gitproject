package com.crudapimongodb.serivice;

import com.crudapimongodb.entity.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    public List<Student> getAllStudents();
    public Optional<Student> getOneStudent(int id);
    public Student createStudent(Student student);
    public Student updateStudent(int id,Student student );
    public void deleteStudent(int id);
    public void deleteAllStudent();
}
