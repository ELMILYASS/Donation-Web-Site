package com.example.backend.Repository;

import com.example.backend.Model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation,Integer> {
}
