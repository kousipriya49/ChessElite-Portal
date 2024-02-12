package com.learn.springsecurity.repository;

import com.learn.springsecurity.model.CourseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends JpaRepository<CourseEntity, Long> {
    // You can add custom query methods here if needed
}