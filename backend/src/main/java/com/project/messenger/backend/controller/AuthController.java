package com.project.messenger.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.messenger.backend.model.User;
import com.project.messenger.backend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  
  private final AuthService authService;
  
  @Autowired
  public AuthController(AuthService authService) {
    this.authService = authService;
  }
  
  @PostMapping("/register")
  public ResponseEntity<User> registration(@RequestBody User user) {
    if (!authService.isLoginAvailable(user.getLogin())) {
       return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(null);
    }
    User registrationUser = authService.registration(user);
    return ResponseEntity.ok(registrationUser);
  }
  
  @PostMapping("/login")
  public ResponseEntity<User> auth(@RequestBody String login, @RequestBody String password) {
    User user = authService.auth(login, password);
    return ResponseEntity.ok(user);
    
  }

}