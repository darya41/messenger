package com.project.messenger.backend.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {
	private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	public static final String encode(String password) {
		return encoder.encode(password);
	}

}
