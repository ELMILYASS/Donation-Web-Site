package com.example.backend.Repository;

import com.example.backend.Model.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothesRepository extends JpaRepository<Clothes,Integer> {
}
