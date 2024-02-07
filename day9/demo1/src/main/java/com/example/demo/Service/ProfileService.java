package com.example.demo.Service;

import com.example.demo.Entity.ProfileEntity;

import java.util.List;
import java.util.Optional;

public interface ProfileService {

    List<ProfileEntity> getAllProfiles();

    Optional<ProfileEntity> getProfileById(Long id);

    ProfileEntity addProfile(ProfileEntity profileEntity);

    ProfileEntity updateProfile(Long id, ProfileEntity profileEntity);

    void deleteProfile(Long id);
}
