import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';
import { userData } from './userData';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata;
  myClickFunction(event) {
    alert("Successsfully submitted");
    console.log(event);
  }
  constructor(private router: Router,private myService:RequestService,private http:HttpClient) { }

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
    if(data.first_Name.lenght>0&&data.last_Name.lenght>0&&data.age>0&&data.gender.length>0&&data.contact_Number>0&&
      data.date_of_Birth>0){
      var user = new userData();
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

}
