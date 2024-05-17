package com.restapi.service;

import com.restapi.entity.Course;

import java.util.List;

public interface CourseService {
    public List<Course> getCourses();
    public Course getCourse(long courseId);
    public Course addCourse(Course course);
    public void deleteCourse(long coursseId);

    public void updateCourse(long id,Course updatedCourse);
}
