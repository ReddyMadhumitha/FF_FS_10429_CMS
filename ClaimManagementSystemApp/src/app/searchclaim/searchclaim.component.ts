import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searchclaim',
  templateUrl: './searchclaim.component.html',
  styleUrls: ['./searchclaim.component.css']
})
export class SearchclaimComponent implements OnInit {

  constructor(private myService:UserService,private http:HttpClient){}
  public claim=[];
  formdata;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      claim_Id: new FormControl("")
    });
  }
  flag;
  onClickSubmit(data) {
    var formData: any = new FormData();
    formData.append("claim_Id", data.claim_Id);
    this.http.get("http://localhost:8080/cms/claim/search/"+data.claim_Id).subscribe((dat)=>{
      this.claim=Array.from(Object.keys(dat),k=>dat[k]);
      if(this.claim[0]!=0)
      this.flag="true";
  });
}
}