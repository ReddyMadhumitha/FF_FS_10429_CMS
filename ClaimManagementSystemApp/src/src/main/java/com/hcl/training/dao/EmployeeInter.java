package com.hcl.training.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.training.model.Employee;

@Repository
public interface EmployeeInter extends JpaRepository<Employee, Integer>{
}
