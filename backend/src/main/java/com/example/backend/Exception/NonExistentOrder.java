package com.example.backend.Exception;

public class NonExistentOrder extends RuntimeException{
    public NonExistentOrder(int id){
        super("There is no order with the id :"+id) ;
    }
}
