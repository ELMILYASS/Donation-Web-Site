package com.example.backend.Controller;

import com.example.backend.Exception.NonExistentProduct;
import com.example.backend.Model.Foods;
import com.example.backend.Model.Other;
import com.example.backend.Repository.OtherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OtherController {
    @Autowired
    private OtherRepository otherRepository ;
    @GetMapping("/other")
    public List<Other> getAllOther(){
        return this.otherRepository.findAll();
    }
    @GetMapping("/other/{id}")
    public Other getOther(@PathVariable int id){
        return this.otherRepository.findById(id).orElseThrow(()->new NonExistentProduct(id,"Others"));
    }
    @PostMapping("/addother")
    public void addOther(@RequestBody Other other){
        this.otherRepository.save(other);
    }
    @DeleteMapping("/deleteother/{id}")
    private void deleteOther(@PathVariable int id){
        this.otherRepository.deleteById(id);
    }
}
