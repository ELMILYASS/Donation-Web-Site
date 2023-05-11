package com.example.backend.Controller;
import com.example.backend.Exception.NonExistentDonation;
import com.example.backend.Model.Donation;
import com.example.backend.Repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Date;

@RestController

public class DonationController {
    @Autowired
    private DonationRepository donationRepository;

    @GetMapping("/donations")
    public List<Donation> getDonation() {
        return this.donationRepository.findAll();
    }
    @GetMapping("/donations/{id}")
    public Donation getDonationById(@PathVariable int id){
        return this.donationRepository.findById(id).orElseThrow(()->new NonExistentDonation(id));
    }
    @DeleteMapping("/donations/{id}")
    public void deleteDonation(@PathVariable int id){
        this.donationRepository.deleteById(id);
    }

    @PostMapping("/donations")
    public void addDonation(@RequestBody Donation donation){
        donation.setDonationDate(new Date());
        this.donationRepository.save(donation);
    }


}

