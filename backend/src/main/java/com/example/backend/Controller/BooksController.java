package com.example.backend.Controller;

import com.example.backend.Exception.NonExistentProduct;
import com.example.backend.Model.Books;
import com.example.backend.Model.Clothes;
import com.example.backend.Repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BooksController {
    @Autowired
    private BooksRepository booksRepository ;
    @GetMapping("books")
    public List<Books> getAllBooks(){
        return this.booksRepository.findAll();
    }
    @GetMapping("/books/{id}")
    public Books getBooks(@PathVariable int id){
        return this.booksRepository.findById(id).orElseThrow(()->new NonExistentProduct(id,"Books"));
    }
    @PostMapping("/addbooks")
    public void addBooks(@RequestBody Books books){
        this.booksRepository.save(books);
    }
    @DeleteMapping("/deletebooks/{id}")
    private void deleteBooks(@PathVariable int id){
        this.booksRepository.deleteById(id);
    }
    @PutMapping("/decrementbooks")
    private void decrement_available_quantity(@PathVariable int id){
        Books books = this.booksRepository.findById(id).get() ;
        books.setAvailableItems(books.getAvailableItems()-1);
        this.booksRepository.save(books);
    }
}
