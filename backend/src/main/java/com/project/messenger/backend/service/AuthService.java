package com.project.messenger.backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.messenger.backend.model.User;
import com.project.messenger.backend.repository.AuthRepository;

import jakarta.transaction.Transactional;

public class AuthService {
  
  private final AuthRepository authRepository;
  
  @Autowired
  public AuthService(AuthRepository authRepository) {
    this.authRepository=authRepository;
  }
  
  @Transactional
  public User registration(User user) {
    return authRepository.registration(user);
  }
  
  @Transactional
  public User auth(String login, String password) {
    return authRepository.auth(login, password);
  }
  
  @Transactional
  public boolean isLoginAvailable(String login) {
    return authRepository.isLoginAvailable(login);
  }

}