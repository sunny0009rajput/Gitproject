package com.restapi.controller;


import com.restapi.entity.Course;
import com.restapi.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {
//    @GetMapping("/home")
//    public String home(){
//        return "this is home page";
//    }
    @Autowired
    private CourseService courseService;

    // get the course
    @GetMapping("/courses")
    public List<Course> getCourses(){
        return courseService.getCourses();
    }

    @GetMapping("/courses/{courseId}")
    public Course getCourse(@PathVariable String courseId){
        return courseService.getCourse(Long.parseLong(courseId));
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
        return courseService.addCourse(course);
    }

    @DeleteMapping("courses/{courseId}")
    public void deleteCourse(@PathVariable("courseId") long courseId){

        courseService.deleteCourse(courseId);

    }

    @PutMapping("courses/{courseId}")
    public void updateCourse(@PathVariable("courseId")long courseId,@RequestBody Course updatedCourse){
        courseService.updateCourse(courseId,updatedCourse);
    }


}
