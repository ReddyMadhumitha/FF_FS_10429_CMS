import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Raiseclaimreq } from '../raiseclaimreq';
import { Claim } from '../claim';

@Component({
  selector: 'app-raiseclaimrequest',
  templateUrl: './raiseclaimrequest.component.html',
  styleUrls: ['./raiseclaimrequest.component.css']
})
export class RaiseclaimrequestComponent implements OnInit {
  msg: any;

 

constructor(private router:Router,private service:UserService) { }
formdata;

  ngOnInit(): void {
    this.formdata= new FormGroup({
      claimId:new FormControl("",Validators.compose([Validators.required])),
      claimDate:new FormControl("",Validators.compose([Validators.required])),
      billAmount:new FormControl("",Validators.compose([Validators.required])),
      claimType:new FormControl("",Validators.compose([Validators.required])),
      insurancePlan:new FormControl("",Validators.compose([Validators.required]))
    })
  }
  //bmi:bmi;
  
  submitted:boolean;
  onClickSubmit(data) {
    var claim:any=new Claim();
    this.submitted=true;
    if(data.claimDate.length>0&&data.billAmount>0&&data.claimType.length>0&&data.insurancePlan.length>0) {
    claim.claimId=data.claimId;
    claim.claimDate=data.claimData;
    claim.billAmount=data.billAmount;
    claim.claimType=data.claimType;
    claim.insurancePlan=data.insurancePlan;
    this.service.raiseclaimrequest(claim).subscribe((response) => {
     console.log(response);
    this.router.navigateByUrl("/userhome");
    }, (error) => {
     console.log(error);
     this.msg = error.message;
    });
    //  this.service.getrcr(data.userId).subscribe((data1)=>{
    // this.persondata=Array.from(Object.keys(data1),k=>data1[k]);
    // });
  }
  //}
}
}
