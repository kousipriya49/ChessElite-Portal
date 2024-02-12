package com.learn.springsecurity.controller;

import com.learn.springsecurity.dto.response.BasicResponse;
import com.learn.springsecurity.dto.response.UserResponse;
import com.learn.springsecurity.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public BasicResponse<List<UserResponse>> getAllUsers() {
        return userService.getAllUsers();
    }
}
