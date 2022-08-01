import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  private _loginUrl = "http://localhost:3000/userlogin";
  constructor(private http:HttpClient,private router:Router) { }

  userlogin(user:any){
      return this.http.post(this._loginUrl, user).pipe(
      map((response:any)=>{
        const user=response;
        if(user!==null)
        {
          console.log("Login Success Service");
          localStorage.setItem('token', user.token);
          this.router.navigate(['/userhome']);
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
