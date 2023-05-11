package com.example.backend.Exception;

public class NonExistentUser extends RuntimeException{
    public NonExistentUser(int id){
        super("There is no user with id : "+id);
    }
}
