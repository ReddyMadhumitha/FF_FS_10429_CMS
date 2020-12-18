/**
 * 
 */
package com.hcl.training.ClaimsManagementSystemApp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.training.ClaimsManagementSystemApp.model.User;

/**
 * @author reddy-madhumitha
 *
 */
@Service
public interface UserServiceInter {

	void saveData(User user);

	User loginData(String user_Id);

	List<User> activationData(String sts);

	void updateData(User user, String user_Id);

	void updateProf(User user, String user_Id);
}
