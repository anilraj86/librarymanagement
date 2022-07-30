import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  private _loginUrl = "http://localhost:3000/login";
  
  constructor(private http:HttpClient) { }

  adminSubmit(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }

}
