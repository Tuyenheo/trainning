package com.book.demo.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Book {
    private int id_book;
    private String name_book;
    private String author;
    private String type;
    private String nxb;
    private Date year;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId_book() {
        return id_book;
    }

    public void setId_book(int id_book) {
        this.id_book = id_book;
    }

    public String getName_book() {
        return name_book;
    }

    public void setName_book(String name_book) {
        this.name_book = name_book;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNxb() {
        return nxb;
    }

    public void setNxb(String nxb) {
        this.nxb = nxb;
    }

    public Date getYear() {
        return year;
    }

    public void setYear(Date year) {
        this.year = year;
    }

    public Book () {

    }
    public Book(int id_book, String name_book, String author, String type, String nxb, Date year) {
        this.id_book = id_book;
        this.name_book = name_book;
        this.author = author;
        this.type = type;
        this.nxb = nxb;
        this.year = year;
    }
    
}
