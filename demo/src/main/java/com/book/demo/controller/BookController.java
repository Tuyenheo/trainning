package com.book.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.book.demo.ResourceNotFoundException;
import com.book.demo.entity.Book;
import com.book.demo.repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value="/books")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @PostMapping
  public ResponseEntity<Book> createBook(@RequestBody Book book) {
    try {
        Book _book = bookRepository
          .save(book);
      return new ResponseEntity<>(_book, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
    @GetMapping
    public List<Book> findAlBook() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id_book}")
    public ResponseEntity<Book> findUserById(@PathVariable(value = "id") Integer id_book) {
        Optional<Book> book = bookRepository.findById(id_book);
    
        if(book.isPresent()) {
            return ResponseEntity.ok().body(book.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id_book}")
    public ResponseEntity<Book> update(@PathVariable(value = "id") Integer id_book,
        @Validated @RequestBody Book BookDetails) throws ResourceNotFoundException {
            Book book = bookRepository.findById(id_book)
        .orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + id_book));

        book.setName_book(BookDetails.getName_book());
        book.setAuthor(BookDetails.getAuthor());
        book.setType(BookDetails.getType());
        book.setNxb(BookDetails.getNxb());
        book.setYear(BookDetails.getYear());
        final Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }

    @DeleteMapping("/{id_book}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id_book") Integer id_book)
         throws ResourceNotFoundException {
        Book book = bookRepository.findById(id_book)
       .orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + id_book));

        bookRepository.delete(book);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
