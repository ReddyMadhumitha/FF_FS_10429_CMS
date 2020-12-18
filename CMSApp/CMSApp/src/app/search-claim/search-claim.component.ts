import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../request.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-claim',
  templateUrl: './search-claim.component.html',
  styleUrls: ['./search-claim.component.css']
})
export class SearchClaimComponent implements OnInit {

  constructor(private myService:RequestService,private http:HttpClient){}
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
