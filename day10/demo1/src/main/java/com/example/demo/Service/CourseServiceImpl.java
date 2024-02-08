// CourseServiceImpl.java

package com.example.demo.Service;

import com.example.demo.Entity.CourseEntity;
import com.example.demo.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepo courseRepository;

    @Autowired
    public CourseServiceImpl(CourseRepo courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public List<CourseEntity> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Optional<CourseEntity> getCourseById(long id) {
        return courseRepository.findById(id);
    }

    @Override
    public CourseEntity addCourse(CourseEntity courseEntity, MultipartFile file) {
        validateCourse(courseEntity);

        try {
            courseEntity.setPhoto(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error processing image");
        }

        return courseRepository.save(courseEntity);
    }

    @Override
    public CourseEntity updateCourse(long id, CourseEntity updatedCourse, MultipartFile file) {
        validateCourse(updatedCourse);

        if (courseRepository.existsById(id)) {
            CourseEntity existingCourse = courseRepository.findById(id).orElseThrow();

            try {
                existingCourse.setPhoto(Base64.getEncoder().encodeToString(file.getBytes()));
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error processing image");
            }

            existingCourse.setCourseName(updatedCourse.getCourseName());
            existingCourse.setCourseDescription(updatedCourse.getCourseDescription());
            existingCourse.setCourseDuration(updatedCourse.getCourseDuration());

            return courseRepository.save(existingCourse);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Course with ID " + id + " not found");
        }
    }

    private void validateCourse(CourseEntity courseEntity) {
        Objects.requireNonNull(courseEntity, "Course cannot be null");
    }

    @Override
    public void deleteCourse(long id) {
        if (courseRepository.existsById(id)) {
            courseRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Course with ID " + id + " not found");
        }
    }
}
