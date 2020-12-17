package com.hcl.training.service;


import java.util.List;

import com.hcl.training.model.Claim;

public interface ClaimService {
	//public void save(RaiseClaimRequest rcr);

	public void save(Claim rcr);

	void saveData(Claim claim);

	List<Claim> claimsData(String member);

	Claim searchClaim(int id);

	List<Claim> getClaims();

	void claimUpdate(int clm, Claim claim);

	List<Claim> claimsList();

	void paymentUpdate(int clm, Claim claim);
	

}
