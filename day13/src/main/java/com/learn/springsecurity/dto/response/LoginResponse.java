package com.learn.springsecurity.dto.response;

import javax.management.relation.Role;
import javax.print.DocFlavor.STRING;

import com.learn.springsecurity.model.Users;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
// import 
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String message;
    private String token;
    private String role;
    private String email;
}
