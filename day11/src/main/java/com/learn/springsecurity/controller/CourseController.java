package com.learn.springsecurity.controller;

import com.learn.springsecurity.model.CourseEntity;
import com.learn.springsecurity.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:5173")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/")
    public List<CourseEntity> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseEntity> getCourseById(@PathVariable long id) {
        CourseEntity course = courseService.getCourseById(id);
        return ResponseEntity.ok(course);
    }

    @PostMapping("/")
    public ResponseEntity<CourseEntity> createCourse(
            @RequestPart("courseEntity") CourseEntity courseEntity,
            @RequestPart("file") MultipartFile file) {
        try {
            CourseEntity savedCourse = courseService.addCourse(courseEntity, file);
            return ResponseEntity.ok(savedCourse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); // or handle the error as needed
        }
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<CourseEntity> updateCourse(@PathVariable long id,
                                                     @RequestBody CourseEntity updatedCourse,
                                                     @RequestParam(value = "file", required = false) MultipartFile file) {
        try {
            CourseEntity updatedCourseEntity = courseService.updateCourse(id, updatedCourse, file);
            return ResponseEntity.ok(updatedCourseEntity);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); // or handle the error as needed
        }
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable long id) {
        try {
            courseService.deleteCourse(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); // or handle the error as needed
        }
    }
    
}
