package com.example.Student_Management_System.controller;

import javax.servlet.http.HttpSession;

import com.example.Student_Management_System.entity.Student;
import com.example.Student_Management_System.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/")
    public String home(Model m) {
        return findPaginated(0, m);
    }

    @GetMapping("/addstudent")
    public String addStudentForm() {
        return "add_student";
    }

    @PostMapping("/register")
    public String studentRegister(@ModelAttribute Student s, HttpSession session) {
        service.addStudent(s);
        session.setAttribute("msg", "Student Added Sucessfully..");
        return "redirect:/";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable int id, Model m) {
        Student s = service.getStudentById(id);
        m.addAttribute("student", s);
        return "edit";
    }

    @PostMapping("/update")
    public String updateStudent(@ModelAttribute Student s, HttpSession session) {
        service.addStudent(s);
        session.setAttribute("msg", "Student Data Update Sucessfully..");
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String deleteStudent(@PathVariable int id, HttpSession session) {

        service.deleteStudent(id);
        session.setAttribute("msg", "Student Data Delete Sucessfully..");
        return "redirect:/";
    }

    @GetMapping("/page/{pageno}")
    public String findPaginated(@PathVariable int pageno, Model m) {

        Page<Student> studentlist = service.getStudentByPaginate(pageno, 4);
        m.addAttribute("student", studentlist);
        m.addAttribute("currentPage", pageno);
        m.addAttribute("totalPages", studentlist.getTotalPages());
        m.addAttribute("totalItem", studentlist.getTotalElements());
        return "index";
    }

}