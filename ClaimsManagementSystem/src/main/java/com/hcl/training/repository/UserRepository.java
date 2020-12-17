/**
 * 
 */
package com.hcl.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.training.model.Claim;
import com.hcl.training.model.User;

//import com.hcl.training.SpringBootRegLogin.model.User;

/**
 * @author reddy-madhumitha
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	@Query("select p from User p where p.userId=?1")
	List<User> findByUserId(int id);
	

	

}
 