/**
 * 
 */
package com.hcl.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.training.model.Claim;

import com.hcl.training.service.ClaimService;
import com.hcl.training.service.UserService;

/**
 * @author reddy-madhumitha
 *
 */
@CrossOrigin(origins = "http://localhost:62562")
@RestController
@RequestMapping("/claim")
public class ClaimController {
	@Autowired
	ClaimService claimService;
    @CrossOrigin(origins = "http://localhost:62562")
	@PostMapping("/raiseclaimrequest")
	public @ResponseBody String save(@RequestBody Claim rcr) {
		claimService.save(rcr);
			return "{\"msg\":\"Added\"}";
	}
    @CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="/claims/{member}")
	public  ResponseEntity<List<Claim>> claimsRaised(@PathVariable String member) {
		try {
			List<Claim> data =claimService.claimsData(member);
			 return new ResponseEntity<>(data, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		
	}
    @CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="/claim/search/{id}")
	public  ResponseEntity<Claim> claimSearch(@PathVariable int id) {
		try {
			Claim data =claimService.searchClaim(id);
			 return new ResponseEntity<>(data, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="/claims/getclaims")
	public  ResponseEntity<List<Claim>> claims() {
		try {
			List<Claim> data =claimService.getClaims();
			 return new ResponseEntity<>(data, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@PutMapping(value="/updateclaim/{clm}")
	public  ResponseEntity<String> updateClaim(@PathVariable int clm,@RequestBody Claim claim) {
		try {
				claimService.claimUpdate(clm,claim);
			 return new ResponseEntity<>("Updation Success", HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<>("Updation Failed", HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@PutMapping(value="/updatePayment/{clm}")
	public  ResponseEntity<String> updatePayment(@PathVariable int clm,@RequestBody Claim claim) {
		try {
				claimService.paymentUpdate(clm,claim);
			 return new ResponseEntity<>("Updation Success", HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<>("Updation Failed", HttpStatus.BAD_REQUEST);
		}
		
	}
	@CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="/claims/listClaims")
	public  ResponseEntity<List<Claim>> claimsList() {
		try {
			List<Claim> data =claimService.claimsList();
			 return new ResponseEntity<>(data, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		
	}

	@CrossOrigin(origins = "http://localhost:62562")
	@GetMapping(value="/active/{claimid}")
	public  ResponseEntity<Claim> claimStatus(@PathVariable int claimid) {
		try {
			Claim data =claimService.searchClaim(claimid);
			 return new ResponseEntity<>(data, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		
	}
}
