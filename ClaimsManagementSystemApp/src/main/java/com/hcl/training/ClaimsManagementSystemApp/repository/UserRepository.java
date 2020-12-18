/**
 * 
 */
package com.hcl.training.ClaimsManagementSystemApp.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.training.ClaimsManagementSystemApp.model.User;


/**
 * @author reddy-madhumitha
 *
 */
@Transactional
@Repository
public interface UserRepository extends JpaRepository<User,Integer>  {
	@Query("from User u where u.user_Id=:user_Id")
	User findByUser_Id(String user_Id);
	@Query("from User u where u.status=:sts")
	List<User> findByStatus(String sts);
	@Modifying( clearAutomatically = true)
	@Query("update User set status=?1 where user_Id=?2")
	int updateData(String sts,String usr);
	@Modifying( clearAutomatically = true)
	@Query("update User set first_Name=?1,last_Name=?2,age=?3,gender=?4,contact_Number=?5,date_Of_Birth=?6 where user_Id=?7")
	void updatePof(String fst, String lst, int age, String gen, String contc, String dob, String user_Id);
}


