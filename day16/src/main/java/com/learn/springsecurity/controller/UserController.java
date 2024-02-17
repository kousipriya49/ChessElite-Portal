package com.learn.springsecurity.controller;

import static com.learn.springsecurity.utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learn.springsecurity.dto.response.BasicResponse;
import com.learn.springsecurity.dto.response.UserResponse;
import com.learn.springsecurity.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<BasicResponse<UserResponse>> getAllUser() {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            response = userService.getAllUser();
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping
    public ResponseEntity<BasicResponse<UserResponse>> postAllUser() {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            // Implement your POST logic here
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}
