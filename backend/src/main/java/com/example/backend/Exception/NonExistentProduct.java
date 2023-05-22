package com.example.backend.Exception;

public class NonExistentProduct extends RuntimeException{
    public NonExistentProduct(int id , String product){
        super("There is no "+product+" with the id "+id);
    }
}
