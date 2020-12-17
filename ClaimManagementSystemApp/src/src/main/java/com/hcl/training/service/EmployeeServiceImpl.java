package com.hcl.training.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hcl.training.dao.EmployeeInter;
import com.hcl.training.model.Employee;
@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeServiceInter{
	 @Autowired
	  EmployeeInter repo;

	public void saveData(Employee employee) {
		repo.save(employee);
		
	}

}
