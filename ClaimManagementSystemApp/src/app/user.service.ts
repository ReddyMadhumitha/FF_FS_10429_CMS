import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Raiseclaimreq } from './raiseclaimreq';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  
  listclaims: any;

  
  constructor(private http:HttpClient) { }
    createUser(User) {
    return this.http.post("http://localhost:8080/user/register",User);

  }
  getloginlist(userId:number) {
    return this.http.get("http://localhost:8080/user/LoginData/"+userId);
  }
  raiseclaimrequest(Claim)
  {
    return this.http.post("http://localhost:8080/claim/raiseclaimrequest/",Claim);
  }

}
