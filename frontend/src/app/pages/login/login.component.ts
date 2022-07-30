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
  
  adminSubmit() {
    this.auth.adminSubmit(this.user)
    .subscribe(
      res=>{
      localStorage.setItem('token',res.token)
      this.router.navigate(['/adminhome'])
    },
      err=>{
        console.log(err);

      });

  }

    

}
