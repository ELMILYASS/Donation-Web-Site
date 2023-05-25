package com.example.backend.security.auth;

public class NotFoundUserException extends Exception{
    public NotFoundUserException(String message){
        super(message);

    }
}
