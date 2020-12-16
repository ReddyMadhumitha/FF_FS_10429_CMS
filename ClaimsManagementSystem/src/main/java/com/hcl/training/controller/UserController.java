/**
 * 
 */
package com.hcl.training.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import com.hcl.training.model.User;
import com.hcl.training.service.UserService;

/**
 * @author reddy-madhumitha
 *
 */
@CrossOrigin
@Controller
@Component
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping(value = { "/save"})
	public void register(@RequestBody User user) {
		userService.saveData(user);
			}
	
}


