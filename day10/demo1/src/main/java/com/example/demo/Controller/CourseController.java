package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile; // Import MultipartFile

import com.example.demo.Entity.CourseEntity;
import com.example.demo.Service.CourseService;

import java.util.List;
// import java.util.Optional;
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
        return ResponseEntity.ok(courseService.getCourseById(id).orElse(null));
    }

    @PostMapping("/")
    public ResponseEntity<CourseEntity> createCourse(
            @RequestPart("courseEntity") CourseEntity courseEntity,
            @RequestPart("file") MultipartFile file) {
        CourseEntity savedCourse = courseService.addCourse(courseEntity, file);
        return ResponseEntity.ok(savedCourse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseEntity> updateCourse(@PathVariable long id,
                                                     @RequestBody CourseEntity updatedCourse,
                                                     @RequestParam(value = "file", required = false) MultipartFile file) {
        CourseEntity updatedCourseEntity = courseService.updateCourse(id, updatedCourse, file);
        return ResponseEntity.ok(updatedCourseEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable long id) {
        courseService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }
    
}
