/**
 * 
 */
package com.hcl.training.ClaimsManagementSystemApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.training.ClaimsManagementSystemApp.model.User;
import com.hcl.training.ClaimsManagementSystemApp.repository.UserRepository;

/**
 * @author reddy-madhumitha
 *
 */
@Service
public class UserService implements UserServiceInter {
	@Autowired
	UserRepository userData;
	@Override
	public void saveData(User user) {
		// TODO Auto-generated method stub
		if(user.getRole()==1) {
			user.setStatus("pending");
		}
		else
			user.setStatus("approved");
		userData.save(user);
	}
	@Override
	public User loginData(String user_Id) {
		// TODO Auto-generated method stub
		try {
			User user=userData.findByUser_Id(user_Id);
			return user;
		}
		catch(Exception e) {
			System.out.println("Fetching Failed"+e.getMessage());
			return null;
		}
	}
	@Override
	public List<User> activationData(String sts) {
		// TODO Auto-generated method stub
		try {
			List<User> user =userData.findByStatus(sts);
			return user;
		}
		catch(Exception e) {
			System.out.println("Fetching Failed"+e.getMessage());
			return null;
		}
	}
	
	public void updateData(User user,String user_Id) {
		// TODO Auto-generated method stub
		String status = user.getStatus();
		userData.updateData(status,user_Id);
	}
	@Override
	public void updateProf(User user, String user_Id) {
		// TODO Auto-generated method stub
		String fst = user.getFirst_Name();
		String lst = user.getLast_Name();
		int age = user.getAge();
		String gen = user.getGender();
		String contc = user.getContact_Number();
		String dob = user.getDate_Of_Birth();
		userData.updatePof(fst,lst,age,gen,contc,dob,user_Id);
		
	}


}
