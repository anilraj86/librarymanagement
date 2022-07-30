import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminsignupService {

 
  constructor(private http:HttpClient) { }

  newAdmin(item:any)
  {   
    console.log("Service executed");
    return this.http.post("http://localhost:3000/adminsignup",{"admin":item})
    .subscribe(data =>{console.log(data)})
  }

}
