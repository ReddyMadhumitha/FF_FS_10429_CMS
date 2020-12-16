/**
 * 
 */
package com.hcl.training.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author reddy-madhumitha
 *
 */
@Entity
@Table(name="raiseclaimreq")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class raiseclaimrequest {
	@Column
    private int claimDate;
    
    @Column
    private float billAmount;
  
    @Column
    private String claimType;

    @Column
    private String insurancePlan;
}
