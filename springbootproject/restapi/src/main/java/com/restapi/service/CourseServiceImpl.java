package com.restapi.service;

import com.restapi.entity.Course;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;



@Service
public class CourseServiceImpl implements CourseService{



    List<Course> list;
    public CourseServiceImpl(){

        list=new ArrayList<>();
        list.add(new Course(145L,"java course","this course is basic java "));
        list.add(new Course(149L,"springn boot","this course is basic spring boot "));
    }
    @Override
    public List<Course> getCourses(){
        return list;
    }

    @Override
    public Course getCourse(long courseId) {
        Course c = null;
        for(Course course : list){
            if(course.getId()== courseId){
                c=course;
                break;
            }
        }
        return c;
    }

    @Override
    public Course addCourse(Course course) {
        list.add(course);
        return course;
    }

    @Override
    public void deleteCourse(long courseId) {
        for (Course course : list) {
            if (course.getId().equals(courseId)) {
                list.remove(course);
                break;
            }
        }
    }

    @Override
    public void updateCourse(long id, Course updatedCourse) {
        for(int i = 0;i < list.size();i++){
            Course course = getCourses().get(i);
            if(course.getId().equals(id)){
                getCourses().set(i,updatedCourse);
                return;
            }
        }
    }

}
