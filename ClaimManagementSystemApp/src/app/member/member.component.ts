import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private router: Router,private myservice:UserService,private http:HttpClient,private incomingRouter: ActivatedRoute) { }
  public claims=[][20]
  public info=[]
  ngOnInit(): void {
    this.p1 = (this.incomingRouter.snapshot.paramMap.get("p1"));
  }
  p1;
  msg;
  flag;
  getClaim() {
    this.http.get("http://localhost:8080/cms/claims/"+this.p1).subscribe((dat)=>{
      this.claims=Array.from(Object.keys(dat),k=>dat[k]);
      if(this.claims[0]["status"]!=null)
      this.flag="true";
  })
  } 
  raiseClaim(id) {
    this.router.navigate(["/raiseClaim",{p1:id}])
  }
  flag1;
  claimInfo(id) {
    this.http.get("http://localhost:8080/cms/claim/search/"+id).subscribe((dat)=>{
      this.info=Array.from(Object.keys(dat),k=>dat[k]);
      if(this.info[0]!=0)
      this.flag1="true";
  })
  }
}
