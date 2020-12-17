import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
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
 
  this.service.updateUser(User).subscribe((response) => {
          console.log(response);
          this.router.navigateByUrl("/userhome");
        }, (error) => {
          console.log(error);
          //this.msg = error.message;
        });
  
  
  // alert("you have successfully registered");
  // this.router.navigate(["home",{p1:"Dear " + data.firstname +" "+ data.lastname+", You are Successfully registered"}]);
  }
  }
  // }
  