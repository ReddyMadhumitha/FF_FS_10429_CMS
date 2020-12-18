import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private incomingRouter: ActivatedRoute) { }
  msg:string;
  ngOnInit(): void {
    this.msg = (this.incomingRouter.snapshot.paramMap.get("p1"));
  }

}
