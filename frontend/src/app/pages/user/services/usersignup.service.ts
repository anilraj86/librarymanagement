import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersignupService {

  user= {
    userName:'',
    userEmail:'',
    userPassword:''
    }

  constructor(private http:HttpClient) { }

  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"user":item})
    .subscribe(data =>{console.log(data)})
  }

}
