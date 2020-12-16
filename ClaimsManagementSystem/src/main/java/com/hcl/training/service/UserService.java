/**
 * 
 */
package com.hcl.training.service;

import java.util.List;

import javax.validation.Valid;

import com.hcl.training.model.User;

//import com.hcl.training.SpringBootRegLogin.model.User;

/**
 * @author reddy-madhumitha
 *
 */
public interface UserService {
	public void saveData(User user);

	public List<User> getAllUsers();

	public boolean login(@Valid User user); 
}
