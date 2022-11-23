package com.example.Student_Management_System.service;

import java.util.List;
import java.util.Optional;

import com.example.Student_Management_System.entity.Student;
import com.example.Student_Management_System.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepo repo;

    public void addStudent(Student s) {
        repo.save(s);
    }

    public List<Student> getAllStudent() {
        return repo.findAll();
    }

    public Student getStudentById(int id) {
        Optional<Student> s = repo.findById(id);
        if (s.isPresent()) {
            return s.get();
        }
        return null;
    }

    public void deleteStudent(int id) {
        repo.deleteById(id);
    }

    public Page<Student> getStudentByPaginate(int currentPage, int size) {
        Pageable p = PageRequest.of(currentPage, size);
        return repo.findAll(p);
    }



}