package com.project.messenger.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.messenger.backend.model.User;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@PostMapping
	public User registration(@RequestBody User user) {
		return null;
	}
	
	@GetMapping("/{user}")
	public User auth(@PathVariable String password, @PathVariable String password) {
		return null;
		
	}

}
