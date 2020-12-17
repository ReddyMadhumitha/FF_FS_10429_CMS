/**
 * 
 */
package com.hcl.training.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.hcl.training.model.User;

//import com.hcl.training.SpringBootRegLogin.model.User;

/**
 * @author reddy-madhumitha
 *
 */

public interface UserService {
	public void saveData(User user);

	public List<User> getLoginData(int id);
//	public void save(RaiseClaimRequest rcr);
// 

}
