package com.example.backend.Exception;

public class NonExistentDonation extends RuntimeException  {
    public NonExistentDonation(int id){
        super("There is no Donation with the id :"+id) ;
    }
}
