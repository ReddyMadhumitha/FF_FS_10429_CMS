import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Listclaims } from '../listclaims';

@Component({
  selector: 'app-listclaims',
  templateUrl: './listclaims.component.html',
  styleUrls: ['./listclaims.component.css']
})
export class ListclaimsComponent implements OnInit {
listclaims :Listclaims = new Listclaims();
  constructor(private router:Router,private service:UserService) { }
  formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      claimId:new FormControl("",Validators.compose([Validators.required])),
      claimInfo:new FormControl("",Validators.compose([Validators.required])),
      requestAmount:new FormControl("",Validators.compose([Validators.required])),
      receivedAmount:new FormControl("",Validators.compose([Validators.required])),
      status:new FormControl("",Validators.compose([Validators.required])),
      userId:new FormControl("",Validators.compose([Validators.required]))
    })
  }
  public persondata=[]
  submitted:boolean;
  onClickSubmit(data) {
    this.submitted=true;
    if(data.claimId>0&&data.claimInfo>0&&data.requestAmount&&data.receivedAmount>0&&data.status>0&&data.userId) {
    
    this.listclaims.claimId=data.claimId;
    this.listclaims.claimInfo=data.claimInfo;
    this.listclaims.requestAmount=data.requestAmount;
    this.listclaims.receivedAmount=data.receivedAmount;
    this.listclaims.status=data.status;
    this.listclaims.userId=data.userId;
    this.service.listclaims(this.listclaims).subscribe((response) => {
      console.log(response);
      //this.router.navigateByUrl("/home");
    }, (error) => {
      console.log(error);
      //this.msg = error.message;
    });
    // this.service.getbmi(data.userId).subscribe((data1)=>{
    //   this.persondata=Array.from(Object.keys(data1),k=>data1[k]);
    // });
  }
  }

}




