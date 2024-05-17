package com.crudapimongodb.controller;

import com.crudapimongodb.entity.Student;
import com.crudapimongodb.serivice.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/allstudent")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Optional<Student> getOneStudent(@PathVariable("id") int id){
        return studentService.getOneStudent(id);
    }

    @PostMapping("/allstudentpost")
    public Student createStudent(@RequestBody Student student){
        return studentService.createStudent(student);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable("id") int id, @RequestBody Student student ){
        return studentService.updateStudent(id,student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable("id") int id){
        studentService.deleteStudent(id);
    }
    @DeleteMapping("/deleteall")
    public void deleteAllStudent(){
        studentService.deleteAllStudent();
    }


}
