import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddbooksService } from '../../books/addbooks.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  adminBooksUp:any;
  adminBooks:any;
  bookser:any;
  books:any=[];

  constructor(private bookService:AddbooksService,private router:Router) { }

newBooks = {
    booksId :'',
    booksTitle:'',
    authorName:'',
    aboutAuthor:'',
    aboutBook:''
    }

  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe(res=>{
      console.log(res);
      this.books=JSON.parse(JSON.stringify(res));
    });
  }

  bookStatus(status:any){}

  delete(id:any)
  {
    console.log(id);
    if(window.confirm('Do you want to delete?'))
    {
      this.bookService.deleteBooks(id);
      alert("Success");
      this.router.navigate(['/adminhome']);
    }
    
  }

  edit(id:any){
    
  }

  addBooks(){
    this.bookService.addNewBooks(this.newBooks);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/adminhome']);

  }

  editBooks(books:any)
  {
    console.log("Home page to Update page"+books._id );
    //this.bookService.getBook(books._id);
    localStorage.setItem("editbooksId",books._id.toString());
    this.router.navigate(['/updatebooks']);
    
  }


}
