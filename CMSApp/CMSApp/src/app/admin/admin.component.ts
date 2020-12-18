import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { claim } from '../raise-claim-request/claim';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,private myservice:RequestService,private http:HttpClient,private incomingRouter: ActivatedRoute,private fb:FormBuilder) { }
  public users=[]
  public user=[]
  public claims=[]
  public claim=[]
  public liclaims=[]
  public liupdate=[]
  public bulk=[]
  updateForm:FormGroup;
  formdata;
  ngOnInit(): void {
    this.mem = (this.incomingRouter.snapshot.paramMap.get("p1"));
    this.updateForm = this.fb.group({
      updateBulk: [null]
    });
    this.formdata = new FormGroup({
      payment_Status:new FormControl("")
    });
  }
  mem;
  flag;
  getData() {
    this.http.get("http://localhost:8080/cms/members").subscribe((dat)=>{
      this.users=Array.from(Object.keys(dat),k=>dat[k]);
      console.log(this.users[0]["status"])
      if(this.users[0]["status"]=="pending")
      this.flag="true";
  })
  }
  flag2; 
  getClaims() {
    this.http.get("http://localhost:8080/cms/claims/getclaims").subscribe((dat)=>{
      this.claims=Array.from(Object.keys(dat),k=>dat[k]);
      if(this.claims[0]["status"]=="pending")
      this.flag2="true";
  })
  }
  flag1;
  flag3;
  memberAcv(id) {
    this.http.get("http://localhost:8080/cms/login/"+id).subscribe((dat)=>{
      this.user=Array.from(Object.keys(dat),k=>dat[k]);
      if(this.user[8]!=null)
      this.flag1="true";
  })
  }
  claimAct(claimid) {
    this.http.get("http://localhost:8080/cms/active/"+claimid).subscribe((dat)=>{
      this.claim=Array.from(Object.keys(dat),k=>dat[k]);
      console.log(this.claim); 
      if(this.claim[0]!=0)
      this.flag3="true";
  })
  }
  updateSts(member) {
    this.router.navigate(["updateStatus",{p1:member}]);
  }
  updateProf() {
    this.router.navigate(["updateProfile",{p1:this.mem}]);
  }
  updatePay(id) {
    this.router.navigate(["payment",{p1:id}]);
  }
  flag4;
  listClaims() {
    this.http.get("http://localhost:8080/cms/claims/listClaims").subscribe((dat)=>{
      this.liclaims=Array.from(Object.keys(dat),k=>dat[k]);
      console.log(this.liclaims); 
      if(this.liclaims.length !=0)
      this.flag4="true";
  })
  }
  flag5;
  listUpdate() {
    this.http.get("http://localhost:8080/cms/claims/listClaims").subscribe((dat)=>{
      this.liupdate=Array.from(Object.keys(dat),k=>dat[k]);
      console.log(this.liupdate); 
      if(this.liupdate.length !=0)
      this.flag5="true";
  })
  }
  num:number;
  submit() {
    console.log("Form Submitted");
    console.log(this.updateForm.value);
    this.num=Number(this.updateForm.value["updateBulk"]);
    this.bulk.push(this.num);
    console.log(this.bulk);
  }
  msg;
  onClickSubmit(data) {
    var clm = new claim();
    clm.payment_Status=data.payment_Status;
    this.http.put(`http://localhost:8080/cms/updatepayment/${this.bulk}`,clm).subscribe((responce) => {
      this.msg = "Your details successfully submited";
      this.router.navigate(["admin", { p1:this.mem}]);
    }, (error) => {
      this.msg = "Your details successfully submited";
      this.router.navigate(["admin", { p1:this.mem}]);
    })
  }
  flag6;
  formfor() {
    this.flag6="true";
  }
  flag7;
  updateStas(id) {
    this.router.navigate(["listClaims",{p1:id}]);
  }
  back(mem) {
    this.router.navigate(["admin",{p1:mem}])
  }
}
