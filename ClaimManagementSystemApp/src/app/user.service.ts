import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  raiseclaimrequest: any;
  listclaims: any;

  
  constructor(private http:HttpClient) { }
    createUser(User) {
    return this.http.post("http://localhost:8080/user/register",User);

  }
}
