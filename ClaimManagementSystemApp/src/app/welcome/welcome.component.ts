import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserhomeComponent } from '../userhome/userhome.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message;
  formData;
  constructor(private router: Router, private ref: ChangeDetectorRef, private ngZone: NgZone, private service: UserService,private http: HttpClient) {
    ref.detach();
    setInterval(() => { this.ref.detectChanges(); }, 500);
    this.formData = new FormGroup({ 
      name: new FormControl(""),
      salary: new FormControl(""), 
      age: new FormControl(""),
    });
  }
  static msg: string;
  ngOnInit(): void {
    this.service.receivedFillter.subscribe((param: string) => {
      this.ngZone.run(() => {
        WelcomeComponent.msg = param;
        //console.log(WelcomeComponent.msg);
      })
    })
    //this.service.receivedFillter.subscribe(param: string)=>{
    //this.msg=param;
  }
  get msg(): string {
    return WelcomeComponent.msg;
  }
  onClickSubmit(data){
    var formData: any =new FormData();
    formData.append("name",data.name);
    formData.append("salary",data.salary);
    formData.append("age",data.age);

    this.http.post('http://dummy.restapiexample.com/api/v1/create',formData).subscribe(
      (response)=>{
        console.log(response);
       this.message="Added successfully";
        //alert("Added successfully");
      },
      (error)=> {
        console.log(error);
        this.message=error.message;
       // alert(error.message);
      }
    );

  }
}


