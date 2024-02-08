package com.learn.springsecurity.service;

import com.learn.springsecurity.model.CourseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CourseService {

    List<CourseEntity> getAllCourses();

    CourseEntity getCourseById(long id);

    CourseEntity addCourse(CourseEntity courseEntity, MultipartFile file);

    CourseEntity updateCourse(long id, CourseEntity updatedCourse, MultipartFile file);

    void deleteCourse(long id);
}
