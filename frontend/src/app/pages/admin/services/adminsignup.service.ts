import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminsignupService {

  admin= {
    adminName:'',
    adminEmail:'',
    adminPassword:''
    }

  constructor(private http:HttpClient) { }

  newAdmin(item:any)
  {   
    console.log("Service executed");
    return this.http.post("http://localhost:3000/insert",{"admin":item})
    .subscribe(data =>{console.log(data)})
  }

}
