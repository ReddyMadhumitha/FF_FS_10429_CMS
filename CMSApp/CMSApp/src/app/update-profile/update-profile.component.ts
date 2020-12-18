import { Component, OnInit } from '@angular/core';
import { userData } from '../register/userData';
import { FormControl, FormGroup } from '@angular/forms';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  formdata;
  myClickFunction(event) {
    alert("Successsfully submitted");
    console.log(event);
  }
  constructor(private router: Router,private myService:RequestService,private http:HttpClient,private incomingRouter: ActivatedRoute) { }
  public p1;
  ngOnInit(): void {
    this.p1 = (this.incomingRouter.snapshot.paramMap.get("p1"));
    this.formdata = new FormGroup({
      first_Name: new FormControl(""),
      last_Name: new FormControl(""),
      age: new FormControl(""),
      gender: new FormControl(""),
      contact_Number: new FormControl(""),
      date_Of_Birth: new FormControl(""),
      user_Id: new FormControl("")
    });
  }
  msg:string;
  onClickSubmit(data) {
      var user = new userData();
    user.first_Name=data.first_Name;
    user.last_Name=data.last_Name;
    user.age=data.age;
    user.gender=data.gender;
    user.contact_Number=data.contact_Number;
    user.date_Of_Birth=data.date_Of_Birth;
    user.user_Id=data.user_Id;
    this.http.put(`http://localhost:8080/cms/updateProf/${this.p1}`,user).subscribe((responce) => {
      this.msg = "Your Details Submited Successfully";
      this.router.navigate(["admin",{p1:this.p1}]);
    }, (error) => {
      this.msg = "Your Details Submited Successfully";
      this.router.navigate(["admin",{p1:this.p1}]);
    })
  }

}
