/**
 * 
 */
package com.hcl.training.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hcl.training.model.Claim;
import com.hcl.training.model.User;
import com.hcl.training.service.UserService;

/** 
 * @author reddy-madhumitha
 *
 */
@CrossOrigin(origins = "http://localhost:62562")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping("/register")
	public @ResponseBody String saveData(@RequestBody User user) {
		userService.saveData(user);
			return "{\"msg\":\"Added\"}";
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="/LoginData/{id}")
	public List<User> logingetdata(@PathVariable("id") int id){
	    List<User> ls=userService.getLoginData(id);
	    return ls;
	}
	

}


