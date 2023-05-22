package com.example.backend.Controller;

import com.example.backend.Exception.NonExistentProduct;
import com.example.backend.Model.Machines;
import com.example.backend.Repository.MachinesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MachinesController {
    @Autowired
    private MachinesRepository machinesRepository;

    @GetMapping("machines")
    public List<Machines> getAllmachines() {
        return this.machinesRepository.findAll();
    }

    @GetMapping("/machines/{id}")
    public Machines getmachines(@PathVariable int id) {
        return this.machinesRepository.findById(id).orElseThrow(() -> new NonExistentProduct(id, "machines"));
    }

    @PostMapping("/addmachines")
    public void addmachines(@RequestBody Machines machines) {
        this.machinesRepository.save(machines);
    }

    @DeleteMapping("/deletemachines/{id}")
    private void deletemachines(@PathVariable int id) {
        this.machinesRepository.deleteById(id);
    }

    @PutMapping("/decrementmachines")
    private void decrement_available_quantity(@PathVariable int id) {
        Machines machines = this.machinesRepository.findById(id).get();
        machines.setAvailableItems(machines.getAvailableItems() - 1);
        this.machinesRepository.save(machines);
    }
};
