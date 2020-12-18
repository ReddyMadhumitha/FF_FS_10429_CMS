import { Component, OnInit } from '@angular/core';
import { claim } from './claim';
import { FormGroup, FormControl } from '@angular/forms';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raise-claim-request',
  templateUrl: './raise-claim-request.component.html',
  styleUrls: ['./raise-claim-request.component.css']
})
export class RaiseClaimRequestComponent implements OnInit {

  constructor(private router: Router,private myService:RequestService,private http:HttpClient,private incomingRouter: ActivatedRoute) { }
  formdata;
  p1;
  ngOnInit(): void {
    this.p1 = (this.incomingRouter.snapshot.paramMap.get("p1"));
    this.formdata = new FormGroup({
      claim_Id: new FormControl(""),
      claim_Info: new FormControl(""),
      bill_Amount: new FormControl(""),
      claim_Type: new FormControl(""),
      claim_Date: new FormControl(""),
      insurance_Policy:new FormControl(""),
      member_Id: new FormControl("")
    });
  }
  msg:string;
  onClickSubmit(data) {
      var user = new claim();
    user.claim_Info=data.claim_Info;
    user.bill_Amount=data.bill_Amount;
    user.claim_Type=data.claim_Type;
    user.claim_Date=data.claim_Date;
    user.insurance_Policy=data.insurance_Policy;
    user.member_Id=data.member_Id;
    this.http.post('http://localhost:8080/cms/claim/saveData',user).subscribe((responce) => {
      this.msg = "Your Details Submited Successfully";
      this.router.navigate(["member", { p1:user.member_Id}]);
    }, (error) => {
      this.msg = "Your Details Submited Successfully";
      this.router.navigate(["member", { p1:user.member_Id}]);
    })
  }

  }

