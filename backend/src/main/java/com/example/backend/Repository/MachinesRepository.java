package com.example.backend.Repository;

import com.example.backend.Model.Machines;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MachinesRepository extends JpaRepository<Machines,Integer> {
}
