package com.learn.springsecurity.service.impl;



import com.learn.springsecurity.dto.response.BasicResponse;
import com.learn.springsecurity.dto.response.UserResponse;
import com.learn.springsecurity.model.Users;
import com.learn.springsecurity.repository.UsersRepository;
import com.learn.springsecurity.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public BasicResponse<List<UserResponse>> getAllUsers() {
        List<Users> users = usersRepository.findAll();
        List<UserResponse> userResponses = users.stream()
                .map(this::convertToUserResponse)
                .collect(Collectors.toList());

        return new BasicResponse<List<UserResponse>>();
    }

    private UserResponse convertToUserResponse(Users user) {
        return UserResponse.builder()
                .id(user.getId().toString())
                .name(user.getUsername())
                .email(user.getEmail())
                // ... (other fields)
                .build();
    }
}
