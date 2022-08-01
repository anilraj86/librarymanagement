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
  getBook(book:any){
    console.log('client update')
    return this.http.put("http://localhost:3000/updatebook",book)
    .subscribe(data =>{console.log(data)});
  }
  getBookValue(id:any){
    console.log("Local storage Value");
    return this.http.get("http://localhost:3000/booklist/"+ id);
  }
  deleteBooks(id:any){
    console.log("Delete Service Visited");
     return this.http.delete("http://localhost:3000/removeBooks/"+id)
    .subscribe(data=>{console.log(data)
    });    
  }

  // editBooks(booksid:any)
  // {
  //   console.log('client update')
  //   return this.http.put("http://localhost:3000/updateBooks",booksid)
  //   .subscribe(data =>{console.log(data)})
  // }
  

}

