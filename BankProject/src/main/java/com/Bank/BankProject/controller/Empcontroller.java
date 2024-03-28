package com.Bank.BankProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Bank.BankProject.Entity.Employee;
import com.Bank.BankProject.Repo.Emprepo;
@CrossOrigin("*")
@RestController
public class Empcontroller {
	@Autowired
	Emprepo erepo;
	@PostMapping("/emp")
	public ResponseEntity<Employee> addemp(@RequestBody Employee employee){
		return new ResponseEntity<>(erepo.save(employee),HttpStatus.CREATED);
		}
	@GetMapping("/getemp")
	public ResponseEntity<List<Employee>> findall(){
		return new ResponseEntity<>(erepo.findAll(),HttpStatus.OK);
		
	}
}
