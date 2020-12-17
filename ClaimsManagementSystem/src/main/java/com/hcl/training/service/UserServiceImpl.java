/**
 * 
 */
package com.hcl.training.service;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.training.model.Claim;
import com.hcl.training.model.User;
import com.hcl.training.repository.UserRepository;
import java.util.Optional;


@Transactional
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userrepo;
	
	public void saveData(User user) {
		// TODO Auto-generated method stub
		userrepo.save(user);
		
	}


	public List<User> getLoginData(int id) {
		// TODO Auto-generated method stub
		List<User> ls=userrepo.findByUserId(id);
        return ls;
	}


	
	} 


	
	





