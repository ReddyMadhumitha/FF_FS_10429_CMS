/**
 * 
 */
package com.hcl.training.ClaimsManagementSystemApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.training.ClaimsManagementSystemApp.model.Claim;
import com.hcl.training.ClaimsManagementSystemApp.repository.ClaimRepository;

/**
 * @author reddy-madhumitha
 *
 */
@Service
public class ClaimService implements ClaimServiceInter{
	@Autowired
	ClaimRepository claimData;
	public void saveData(Claim claim) {
		// TODO Auto-generated method stub
		claim.setStatus("pending");
		claim.setPayment_Status("pending");
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
		String pSts = claim.getPayment_Status();
		try {
			claimData.findByUpd(pSts,clm);
		}
		catch(Exception e) {
			System.out.println("Failed to Update"+e.getMessage());
		}

}
}
