package com.example.edugateway_backend.service;

import com.example.edugateway_backend.entity.Student;
import com.example.edugateway_backend.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long studentId) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);
        return optionalStudent.orElse(null);
    }

    public Student createStudent(Student student) {
        // You might want to add validation logic or other business logic before saving
        return studentRepository.save(student);
    }

    public Student updateStudent(Long studentId, Student updatedStudent) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);
        if (optionalStudent.isPresent()) {
            // Update the existing student with the new information
            Student existingStudent = optionalStudent.get();
            // Set updated fields
            existingStudent.setName(updatedStudent.getName());
            existingStudent.setDob(updatedStudent.getDob());
            // Update other fields as needed

            // Save the updated student
            return studentRepository.save(existingStudent);
        }
        return null; // Or throw an exception indicating that the student with the given ID was not found
    }

    public boolean deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
        return true;
    }
}
