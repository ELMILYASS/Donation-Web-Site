package com.example.backend.Repository;

import com.example.backend.Model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Books,Integer> {
}
