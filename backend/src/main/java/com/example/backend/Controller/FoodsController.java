package com.example.backend.Controller;

import com.example.backend.Exception.NonExistentProduct;
import com.example.backend.Repository.FoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.backend.Model.Foods;
import java.util.List;

@RestController
public class FoodsController {
    @Autowired
    private FoodsRepository foodsRepository;
    @GetMapping("/foods")
    public List<Foods> getAllFoods(){
        return this.foodsRepository.findAll();
    }
    @GetMapping("/foods/{id}")
    public Foods getFoods(@PathVariable int id){
        return this.foodsRepository.findById(id).orElseThrow(()->new NonExistentProduct(id,"Clothes"));
    }
    @PostMapping("/addfoods")
    public void addFoods(@RequestBody Foods foods){
        this.foodsRepository.save(foods);
    }
    @DeleteMapping("/deletefoods/{id}")
    private void deleteFoods(@PathVariable int id){
        this.foodsRepository.deleteById(id);
    }
}
