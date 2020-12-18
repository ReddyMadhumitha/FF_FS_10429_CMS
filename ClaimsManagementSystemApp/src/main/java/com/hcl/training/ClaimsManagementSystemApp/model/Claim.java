package com.hcl.training.ClaimsManagementSystemApp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="claim")
public class Claim {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int claim_Id;
	private String claim_Info;
	private String claim_Type;
	private double bill_Amount;
	private String claim_Date;
	private String insurance_Policy;
	private String member_Id;
	private String status;
	private String payment_Status;

}