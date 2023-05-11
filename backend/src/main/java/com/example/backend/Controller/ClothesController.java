package com.example.backend.Controller;

import com.example.backend.Exception.NonExistentProduct;
import com.example.backend.Model.Clothes;
import com.example.backend.Repository.ClothesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClothesController {
    @Autowired
    private ClothesRepository clothesRepository ;
    @GetMapping("/clothes")
    public List<Clothes> getAllClothes(){
        return this.clothesRepository.findAll();
    }
    @GetMapping("/clothes/{id}")
    public Clothes getClothes(@PathVariable int id){
        return this.clothesRepository.findById(id).orElseThrow(()->new NonExistentProduct(id,"Clothes"));
    }
    @PostMapping("/addclothes")
    public void addClothes(@RequestBody Clothes clothes){
        this.clothesRepository.save(clothes);
    }
    @DeleteMapping("/deleteclothes/{id}")
    private void deleteClothes(@PathVariable int id){
        this.clothesRepository.deleteById(id);
    }

   @PutMapping("/decrementclothes")
    private void decrement_available_quantity(@PathVariable int id){
        Clothes clothes = this.clothesRepository.findById(id).get() ;
        clothes.setAvailableItems(clothes.getAvailableItems()-1);
        this.clothesRepository.save(clothes);
   }


}
