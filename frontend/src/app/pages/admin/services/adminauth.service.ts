import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  private _loginUrl = "http://localhost:3000/login";
  
  constructor(private http:HttpClient,private router:Router) { }

  adminSubmit(admin:any)
  {
    return this.http.post(this._loginUrl, admin).pipe(
      map((response:any)=>{
        const admin=response;
        if(admin!==null)
        {
          console.log("Login Success Service");
          localStorage.setItem('token', admin.token);
          this.router.navigate(['/adminhome']);
        }
        else
        {
          console.log("result failed");
          //this.router.navigate(['/']);
          alert("Invalid User Details");
        }
      })
    )
  }

}
