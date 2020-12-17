/**
 * 
 */
package com.hcl.training.model;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author reddy-madhumitha
 *
 */
@Entity
@Table(name="User")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int Id;

    private String firstName;
   
    private String lastName;
 
    private Integer age; 
 
    private String gender;
   
    private long contactNumber;
	
  
    private int userId;
   
    private String dateofbirth;

    private String password;
  
    private String confirmPassword;
    //@NotEmpty(message="Please provide  your role id")
	private Integer roleId;
  

}
