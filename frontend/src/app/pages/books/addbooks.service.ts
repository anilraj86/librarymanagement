import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddbooksService {

  constructor(private http:HttpClient) { }


  addNewBooks(item:any){
    console.log("Service Visited");
    return this.http.post("http://localhost:3000/addbooks",{"books":item})
    .subscribe(data =>{console.log(data)
    });
  }
  getBooks(){
    return this.http.get("http://localhost:3000/booklist");
   
  }

  deleteBooks(id:any){
    console.log("Delete Service Visited");
     return this.http.delete("http://localhost:3000/removeBooks/"+id)
    .subscribe(data=>{console.log(data)
    });    
  }
  

}

