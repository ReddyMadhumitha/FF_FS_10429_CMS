import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata;
  public users=[];
  constructor(private router: Router,private myservice:RequestService,private http:HttpClient) { }
  myClickFunction(event) {
    alert("Deatils submited");
    console.log(event);
  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      user_Id: new FormControl(""),
      password: new FormControl(""),
      confirmpassword: new FormControl("")
    });
  }
  msg:string;
  onClickSubmit(data) {
      this.http.get("http://localhost:8080/cms/login/"+data.user_Id).subscribe((dat)=>{
      this.users=Array.from(Object.keys(dat),k=>dat[k]);
      console.log(this.users);
      if(this.users[6]==1) {
        if(this.users[8]=="approved") {
        this.msg="Login Success";
        this.router.navigate(["member",{ p1:data.user_Id }]);
        }
        else
        this.msg="Login Failed Due TO Unauthorization From Admin";
      }
      else if(this.users[6]==2) {
        this.msg="Login Success";
        this.router.navigate(["admin",{ p1:data.user_Id }]);
      }
      else 
      this.msg="Login Failed";
    }) 
  }
}
