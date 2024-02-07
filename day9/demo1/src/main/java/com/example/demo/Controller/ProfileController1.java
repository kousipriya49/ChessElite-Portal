package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.ProfileEntity;
import com.example.demo.Service.ProfileServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/profiles")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController1 {

    private final ProfileServiceImpl profileService;

    @Autowired
    public ProfileController1(ProfileServiceImpl profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/")
    public List<ProfileEntity> getAllProfiles() {
        return profileService.getAllProfiles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProfileEntity> getProfileById(@PathVariable Long id) {
        return ResponseEntity.ok(profileService.getProfileById(id).orElse(null));
    }

    @PostMapping("/")
    public ResponseEntity<ProfileEntity> createProfile(@RequestBody ProfileEntity profileEntity) {
        ProfileEntity savedProfile = profileService.addProfile(profileEntity);
        return ResponseEntity.ok(savedProfile);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProfileEntity> updateProfile(@PathVariable Long id, @RequestBody ProfileEntity profileEntity) {
        ProfileEntity updatedProfile = profileService.updateProfile(id, profileEntity);
        return ResponseEntity.ok(updatedProfile);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id) {
        profileService.deleteProfile(id);
        return ResponseEntity.noContent().build();
    }
}
