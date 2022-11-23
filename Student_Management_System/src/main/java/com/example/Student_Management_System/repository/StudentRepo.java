package com.example.Student_Management_System.repository;

import com.example.Student_Management_System.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer>{

}

