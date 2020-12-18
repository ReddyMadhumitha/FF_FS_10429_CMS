/**
 * 
 */
package com.hcl.training.ClaimsManagementSystemApp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.training.ClaimsManagementSystemApp.model.Claim;

/**
 * @author reddy-madhumitha
 *
 */
@Service
public interface ClaimServiceInter {
	void saveData(Claim claim);

	List<Claim> claimsData(String member);

	Claim searchClaim(int id);

	List<Claim> getClaims();

	void claimUpdate(int clm, Claim claim);

	List<Claim> claimsList();

	void paymentUpdate(int clm, Claim claim);

}
