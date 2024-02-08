package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.RegisterEntity;
import com.example.demo.Service.RegistrationService;


@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "http://localhost:5713") // Adjust the origin based on your frontend URL
public class RegistrationController {

    private final RegistrationService registrationService;

    @Autowired
    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    public ResponseEntity<Void> register(@RequestBody RegisterEntity registrationData) {
        // Handle the registration data using the service
        registrationService.register(registrationData);
        return ResponseEntity.ok().build();
    }
}
