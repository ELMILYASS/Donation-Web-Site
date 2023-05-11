package com.example.backend.Controller;


import com.example.backend.Exception.NonExistentUser;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class HandleNonExistentUser {
    @ResponseBody
    @ExceptionHandler(NonExistentUser.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> NonExistentUserExceptionHandler(NonExistentUser exception){
        Map<String , String> message =new HashMap<>();
        message.put("errorMessage",exception.getMessage());
        return message ;
    }
}