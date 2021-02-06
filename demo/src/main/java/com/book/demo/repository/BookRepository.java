package com.book.demo.repository;

import com.book.demo.entity.Book;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Integer>{
    
}
