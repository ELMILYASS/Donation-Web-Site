package com.example.backend.security.auth;

public class NotFoundUserException extends RuntimeException{
    public NotFoundUserException(String message){
        super(message);

    }
}
