package com.project.messenger.backend.repository;

public class RepositoryException extends RuntimeException {
	
	public RepositoryException(String message) {
		super(message);
	}
	
	public RepositoryException(String message,Throwable throwable) {
		super(message,throwable);
	}
	
	public RepositoryException(Throwable throwable) {
		super(throwable);
	}

}
