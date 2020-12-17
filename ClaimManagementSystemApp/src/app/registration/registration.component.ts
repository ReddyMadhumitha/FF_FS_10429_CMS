import { Component, OnInit } from'@angular/core';
import { FormGroup, FormControl,Validators } from'@angular/forms';
import { Router } from'@angular/router';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
@Component({
selector:'app-registration',
templateUrl:'./registration.component.html',
styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
formdata;

title = 'Claims Management System';
  msg1: string;
service: any;
constructor (private router: Router,private http: HttpClient){}
ngOnInit(): void{
this.formdata =new FormGroup({
firstName:new FormControl(""),
lastName:new FormControl(""),
age:new FormControl(""),
gender:new FormControl(""),
contactNumber:new FormControl(""),
dateofbirth:new FormControl(""),
userId:new FormControl(""),
password:new FormControl(""),
confirmPassword:new FormControl("")

 });
 }
 submitted:boolean;
onClickSubmit(data)
{
  this.submitted=true;
  // if(data.lastname.length>0) {
  var user1:any=new User();
user1.firstName=data.firstName;
user1.lastName=data.lastName;
user1.age=data.age;
user1.gender=data.gender;
user1.contactNumber=data.contactNumber;
user1.dateofbirth=data.dateofbirth;
user1.userId=data.userId;
user1.password=data.password;
user1.confirmPassword=data.confirmPassword;
this.service.createUser(User).subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl("/login");
      }, (error) => {
        console.log(error);
        //this.msg = error.message;
      });


// alert("you have successfully registered");
// this.router.navigate(["home",{p1:"Dear " + data.firstname +" "+ data.lastname+", You are Successfully registered"}]);
}
}
// }







