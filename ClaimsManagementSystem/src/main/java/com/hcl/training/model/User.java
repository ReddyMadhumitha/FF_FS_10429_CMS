/**
 * 
 */
package com.hcl.training.model;

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
	@Column
    private String firstName;
    
    @Column
    private String lastName;
  
    @Column
    private Integer age;

    @Column
    private String gender;
   // @NotEmpty(message="Please enter your gender")
	@Pattern(regexp="(^$|[0-9]{10})",message="Enter 10 digit number")
    private String contactNumber;
	//@NotEmpty(message="Please enter your contactNumber")
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int userId;
    @Column
    private int dateofbirth;
	@Column
    private String password;
   // @NotEmpty(message="Please enter your password")
    @Column
    private String confirmPassword;
    //@NotEmpty(message="Please provide  your role id")
	private Integer roleId;
  

}
