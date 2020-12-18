import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http:HttpClient) { }
  getData(user_Id) {
    return this.http.get(`http://localhost:8080/cms/search/${user_Id}`);
  }
}
