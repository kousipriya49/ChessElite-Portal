package com.example.demo.Repository;

import com.example.demo.Entity.AcademyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyRepo extends JpaRepository<AcademyEntity, Long> {
    // You can add custom query methods here if needed
}
