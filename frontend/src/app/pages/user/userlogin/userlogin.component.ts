import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(public router:Router,private userauth:UserauthService) { }

  user:any;
  password:any;
  username:any

  ngOnInit(): void {
  }
  userSubmit(form:any){
    const myloginObserver={
      next:(x:any)=>console.log("Scceeded"),
      error:(err:any)=>console.log(err)
    };
    this.userauth.userlogin(form.value).subscribe(myloginObserver);
    
   }
}
