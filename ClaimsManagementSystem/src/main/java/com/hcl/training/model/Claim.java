
package com.hcl.training.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//
/**
 * @author reddy-madhumitha
 
*/

@Entity
@Table(name="claim")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Claim {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int Id;
	private int ClaimId;
    private String claimDate;    
    private float billAmount;
    private String claimType;
    private String insurancePlan;
    private String claimInfo;    
    private float requestAmount;
    private float receivedAmount;
    private String status;
    private int userId;
}
