package com.learn.springsecurity.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.AcademyEntity;

@Repository
public interface AcademyRepo extends JpaRepository<AcademyEntity, Long> {
    // You can add custom query methods here if needed
}