package com.hcl.training.ClaimsManagementSystemApp.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="userdata")
public class User {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String first_Name;
    private String last_Name;
    private int age;
    private String gender;
    private String contact_Number;
    private int role;
    private String date_Of_Birth;
    private String status;
    private String user_Id;
    private String password;
    @Transient
    private String confirm_Password;

}
