import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(public router:Router) { }

  public users = [];
  user:any;
  temp:any;
  password:any;
  username:any;
  ngOnInit(): void {
  }
  userSubmit(form:any){
    this.user = form.value;
    console.log(this.user.username);
    console.log(this.user.password);
  }
}
