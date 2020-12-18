import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { userData } from '../register/userData';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  constructor(private router: Router,private myservice:RequestService,private http:HttpClient,private incomingRouter: ActivatedRoute) { }

  member;
  formdata;
  ngOnInit(): void {
    this.member = (this.incomingRouter.snapshot.paramMap.get("p1"));
    this.formdata = new FormGroup({
      user_Id: new FormControl(""),
      status: new FormControl("")
    });
  }
  msg;
  onClickSubmit(data) {
      var user = new userData();
    user.user_Id=data.user_Id;
    user.status=data.status;
    this.http.put(`http://localhost:8080/cms/updateData/${data.user_Id}`,user).subscribe((responce) => {
      this.msg = "Your details successfully submited";
      this.router.navigate(["admin", { p1:data.user_Id}]);
    }, (error) => {
      this.msg = "Your details successfully submited";
      this.router.navigate(["admin", { p1:data.user_Id}]);
    })
  }
}
