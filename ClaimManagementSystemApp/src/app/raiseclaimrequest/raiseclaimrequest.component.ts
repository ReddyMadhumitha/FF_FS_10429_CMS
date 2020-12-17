import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Raiseclaimreq } from '../raiseclaimreq';

@Component({
  selector: 'app-raiseclaimrequest',
  templateUrl: './raiseclaimrequest.component.html',
  styleUrls: ['./raiseclaimrequest.component.css']
})
export class RaiseclaimrequestComponent implements OnInit {
  msg: any;

 

constructor(private router:Router,private service:UserService) { }
formdata;
rcr:Raiseclaimreq =new Raiseclaimreq();
  ngOnInit(): void {
    this.formdata= new FormGroup({
      claimDate:new FormControl("",Validators.compose([Validators.required])),
      billAmount:new FormControl("",Validators.compose([Validators.required])),
      claimType:new FormControl("",Validators.compose([Validators.required])),
      insuranceType:new FormControl("",Validators.compose([Validators.required]))
    })
  }
  //bmi:bmi;
  public persondata=[]
  submitted:boolean;
  onClickSubmit(data) {
    this.submitted=true;
    if(data.claimDate>0&&data.billAmount>0&&data.claimType>0&&data.insuranceType>0) {
    this.rcr.claimDate=data.claimData;
    this.rcr.billAmount=data.billAmount;
    this.rcr.claimType=data.claimType;
    this.rcr.insurancePlan=data.insurancePlan;
    this.service.raiseclaimrequest(this.rcr).subscribe((response) => {
     console.log(response);
    this.router.navigateByUrl("/home");
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
