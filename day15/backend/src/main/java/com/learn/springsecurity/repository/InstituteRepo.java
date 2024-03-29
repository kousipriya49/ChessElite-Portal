package com.learn.springsecurity.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.learn.springsecurity.model.InstituteEntity;

@Repository
public interface InstituteRepo extends JpaRepository<InstituteEntity, Integer> {
    // You can add custom query methods here if needed
}
