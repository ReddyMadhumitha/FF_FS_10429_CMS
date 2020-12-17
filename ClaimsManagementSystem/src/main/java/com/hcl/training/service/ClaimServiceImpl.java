/**
 * 
 */
package com.hcl.training.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hcl.training.model.Claim;
import com.hcl.training.repository.ClaimRepository;
import com.hcl.training.repository.UserRepository;

/**
 * @author reddy-madhumitha
 *
 */
@Transactional
@Service
public class ClaimServiceImpl  implements ClaimService{

	
	@Autowired
	ClaimRepository claimData;
	
	public void save(Claim rcr) {
// TODO Auto-generated method st
	claimData.save(rcr);
	}

	public void saveData(Claim claim) {
		// TODO Auto-generated method stub
		claim.setStatus("pending");

		claimData.save(claim);
	}
	@Override
	public List<Claim> claimsData(String member) {
		// TODO Auto-generated method stub
		try {
			List<Claim> claims =claimData.findByMemberId(member);
			return claims;
		}
		catch(Exception e) {
			System.out.println("Fetching failed"+e.getMessage());
			return null;
		}
	}
	@Override
	public Claim searchClaim(int id) {
		// TODO Auto-generated method stub
		try {
			Claim claim =claimData.findByClaimId(id);
			return claim;
		}
		catch(Exception e) {
			System.out.println("Fetching failed"+e.getMessage());
			return null;
		}
	}
	@Override
	public List<Claim> getClaims() {
		// TODO Auto-generated method stub
		String str="pending";
		try {
			List<Claim> lc =claimData.getClaims(str);
			return lc;
		}
		catch(Exception e) {
			System.out.println("Failed to fetch"+e.getMessage());
			return null;
		}
	}
	@Override
	public void claimUpdate(int clm, Claim claim) {
		// TODO Auto-generated method stub
		String sts = claim.getStatus();
		claimData.updateByclaim(sts,clm);
	}
	@Override
	public List<Claim> claimsList() {
		// TODO Auto-generated method stub
		String sts="approved";
		try {
			return claimData.findByApr(sts);
		}
		catch(Exception e) {
			System.out.println("Failed to insert"+e.getMessage());
			return null;
		}
	}
	@Override
	public void paymentUpdate(int clm, Claim claim) {
		// TODO Auto-generated method stub
		String pSts = claim.getStatus();
		try {
			claimData.findByUpd(pSts,clm);
		}
		catch(Exception e) {
			System.out.println("Failed to Update"+e.getMessage());
		}

}

	

}
