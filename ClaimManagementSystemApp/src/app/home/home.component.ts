import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg = "";
  constructor(private incomingRouter: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.msg = (this.incomingRouter.snapshot.paramMap.get("p1"));
  }
}
 