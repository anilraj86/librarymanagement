import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersignupService } from '../../services/usersignup.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor(private userSignupServ:UsersignupService,private router:Router) { }

  ngOnInit(): void {
  }
  normalUser={
    username:'',
    useremail:'',
    userpassword:'',
    cpassword:''
  }
  
  userSignup(){
    this.userSignupServ.newUser(this.normalUser);
    console.log("Success");
    this.router.navigate(['/userlogin']);
  }
}
