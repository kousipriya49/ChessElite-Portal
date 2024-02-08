package com.example.demo.Repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.RegisterEntity;

public interface RegistrationRepository extends JpaRepository<RegisterEntity, Long> {
    // Additional query methods if needed
}
