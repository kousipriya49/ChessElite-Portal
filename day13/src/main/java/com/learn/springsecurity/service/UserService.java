package com.learn.springsecurity.service;

import java.util.List;

import com.learn.springsecurity.dto.response.BasicResponse;
import com.learn.springsecurity.dto.response.UserResponse;

public interface UserService {

    BasicResponse<List<UserResponse>> getAllUsers();

}
