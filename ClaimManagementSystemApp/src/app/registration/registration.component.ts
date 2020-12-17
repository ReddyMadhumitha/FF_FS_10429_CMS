import { Component, OnInit } from'@angular/core';
import { FormGroup, FormControl,Validators } from'@angular/forms';
import { Router } from'@angular/router';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
selector:'app-registration',
templateUrl:'./registration.component.html',
styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formdata;
  myClickFunction(event) {
    alert("Successsfully submitted");
    console.log(event);
  }
  constructor(private router: Router,private myService:UserService,private http:HttpClient) { }
 
  ngOnInit(): void {
    this.formdata = new FormGroup({
      first_Name: new FormControl("",Validators.compose([Validators.required])),
      last_Name: new FormControl("",Validators.compose([Validators.required])),
      age: new FormControl("",Validators.compose([Validators.required])),
      gender: new FormControl("",Validators.compose([Validators.required])),
      contact_Number: new FormControl("",Validators.compose([Validators.required])),
      role: new FormControl("",Validators.compose([Validators.required])),
      date_Of_Birth: new FormControl("",Validators.compose([Validators.required])),
      user_Id: new FormControl("",Validators.compose([Validators.required])),
      password: new FormControl("",Validators.compose([Validators.required])),
      confirm_Password: new FormControl("",Validators.compose([Validators.required]))
    });
  }
  msg;
  submitted;
  onClickSubmit(data) {
    this.submitted="true";
      var user = new User();
    user.first_Name=data.first_Name;
    user.last_Name=data.last_Name;
    user.age=data.age;
    user.gender=data.gender;
    user.contact_Number=data.contact_Number;
    user.role=data.role;
    alert(user.gender);
    user.date_Of_Birth=data.date_Of_Birth;
    user.user_Id=data.user_Id;
    user.password=data.password;
    user.confirm_Password=data.confirm_Password;
    this.http.post('http://localhost:8080/cms/saveData',user).subscribe((responce) => {
      this.msg = responce;
      this.router.navigate(["home", { p1:this.msg}]);
    }, (error) => {
      //this.msg = "Insertion Failed";
      this.router.navigate(["home", { p1:this.msg}]);
    })
  }
 
}





