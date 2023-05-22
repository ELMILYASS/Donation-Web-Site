package com.example.backend.Exception;

public class NonExistentReservation extends RuntimeException{

    public NonExistentReservation(int id){

        super("There is no reservation with the id :"+id) ;
    }
}
