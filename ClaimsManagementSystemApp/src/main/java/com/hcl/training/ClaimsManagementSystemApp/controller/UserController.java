package com.hcl.training.ClaimsManagementSystemApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hcl.training.ClaimsManagementSystemApp.model.User;
import com.hcl.training.ClaimsManagementSystemApp.service.UserServiceInter;

/**
 * @author reddy-madhumitha
 *
 */
@CrossOrigin
@Controller
@RequestMapping("/cms")
public class UserController {
	@Autowired
	UserServiceInter userService;
	@CrossOrigin(origins = "http://localhost:62562")
	@PostMapping(value="/saveData")
	public  ResponseEntity<String> saveUser(@RequestBody User user) {
		try {
			System.out.println(user.getRole());
			System.out.println(user.getPassword());
			userService.saveData(user);
			 return new ResponseEntity<>("Insertion Success", HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<>("Insertion Failed", HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="login/{user_Id}")
	public  ResponseEntity<User> loginUser(@PathVariable String user_Id) {
		try {
			User data =userService.loginData(user_Id);
			 return new ResponseEntity<>(data, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="/members")
	public  ResponseEntity<List<User>> activationUser() {
		String sts="pending";
		try {
			List<User> data =userService.activationData(sts);
			 return new ResponseEntity<>(data, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@PutMapping(value="/updateData/{user_Id}")
	public  ResponseEntity<String> updateUser(@PathVariable String user_Id,@RequestBody User user) {
		try {
			userService.updateData(user,user_Id);
			 return new ResponseEntity<>("Update Success", HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<>("Update Failed", HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@PutMapping(value="/updateProf/{user_Id}")
	public  ResponseEntity<String> updatePro(@PathVariable String user_Id,@RequestBody User user) {
		try {
			userService.updateProf(user,user_Id);
			 return new ResponseEntity<>("Update Success", HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<>("Update Failed", HttpStatus.BAD_REQUEST);
		}
		
	}
}
