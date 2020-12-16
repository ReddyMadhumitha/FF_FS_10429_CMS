/**
 * 
 */
package com.hcl.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.training.model.User;

//import com.hcl.training.SpringBootRegLogin.model.User;

/**
 * @author reddy-madhumitha
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

}
