/**
 * 
 */
package com.hcl.training.service;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hcl.training.model.User;
import com.hcl.training.repository.UserRepository;

/**
 * @author reddy-madhumitha
 *
 */
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userrepo;
	
	public void saveData(User user) {
		// TODO Auto-generated method stub
		userrepo.save(user);
		
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean login(@Valid User user) {
		// TODO Auto-generated method stub
		return false;
	}

}
