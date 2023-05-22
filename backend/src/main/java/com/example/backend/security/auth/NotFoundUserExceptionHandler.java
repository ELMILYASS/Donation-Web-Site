package com.example.backend.security.auth;

import com.example.backend.Exception.NonExistentUser;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class NotFoundUserExceptionHandler {
    @ResponseBody
    @ExceptionHandler(NotFoundUserException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> NotFoundUserExceptionHandle(NotFoundUserException exception){
        Map<String , String> message =new HashMap<>();
        message.put("errorMessage",exception.getMessage());
        return message ;
    }
}
