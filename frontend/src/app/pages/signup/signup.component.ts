import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsignupService } from '../admin/services/adminsignup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private adminSignupSrvc:AdminsignupService,private route:Router) { }

  adminUser={

    adminName:'Anilraj',
    adminEmail:'asdasd',
    adminPassword:'asdasd',
    cpassword:'asdasd',
    }

  ngOnInit(): void {
  }
      

  adminSignup(){
    this.adminSignupSrvc.newAdmin(this.adminUser);
    console.log("Success");
    //this.route.navigate(['/login']);
  }

}

