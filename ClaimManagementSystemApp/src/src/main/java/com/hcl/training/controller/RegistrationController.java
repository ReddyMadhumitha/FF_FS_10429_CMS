package com.hcl.training.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hcl.training.model.Employee;
import com.hcl.training.service.EmployeeServiceInter;
@Controller
public class RegistrationController {
	@Autowired
	EmployeeServiceInter service;
	@PostMapping(value = "/registration")
	public ModelAndView add(@Valid @ModelAttribute("employee") Employee employee, BindingResult result) {
		if (result.hasErrors()) {
			return new ModelAndView("register");
		}
			else
			{
				service.saveData(employee);
				return new ModelAndView("registrationSuccess");
			}
		}
	@GetMapping(value="/register")
	public ModelAndView employeeform(@ModelAttribute("employee") Employee user) {
		return new ModelAndView("register");
	}
}
