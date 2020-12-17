package com.hcl.training.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.hcl.training.model.Claim;
import com.hcl.training.model.User;
@Transactional
@Repository
public interface ClaimRepository  extends JpaRepository<Claim,Integer> {
	@Query("from Claim c where c.member_Id=:member")
	List<Claim> findByMemberId(String member);
	@Query("from Claim c where c.claim_Id=:id")
	Claim findByClaimId(int id);
	@Query("from Claim c where c.status=:str")
	List<Claim> getClaims(String str);
	@Modifying
	@Query("update Claim set status=?1 where claim_Id=?2")
	void updateByclaim(String sts,int clm);
	@Query("from Claim c where c.status=:sts")
	List<Claim> findByApr(String sts);
	@Modifying
	@Query("update Claim set payment_Status=?1 where claim_Id=?2")
	void findByUpd(String pSts, int clm);

}
