import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AdminauthService } from '../admin/services/adminauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    adminname:'',
    password:''
  }

  constructor(public router:Router,public auth:AdminauthService,private fb:FormBuilder) { }
  
  
 
  ngOnInit(): void {
  }
  
  adminSubmit(form:any) {
    const myloginObserver={
      next:(x:any)=>console.log("Scceeded"),
      error:(err:any)=>console.log(err)
    };
    this.auth.adminSubmit(form.value).subscribe(myloginObserver);
  }
}
