// CourseService.java

package com.example.demo.Service;

import com.example.demo.Entity.CourseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface CourseService {

    List<CourseEntity> getAllCourses();

    Optional<CourseEntity> getCourseById(long id);

    CourseEntity addCourse(CourseEntity courseEntity, MultipartFile file);

    CourseEntity updateCourse(long id, CourseEntity updatedCourse, MultipartFile file);

    void deleteCourse(long id);
}
