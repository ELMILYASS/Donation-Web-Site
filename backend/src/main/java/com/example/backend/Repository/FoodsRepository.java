package com.example.backend.Repository;

import com.example.backend.Model.Foods;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodsRepository extends JpaRepository<Foods,Integer> {
}
