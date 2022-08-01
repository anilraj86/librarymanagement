import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddbooksService } from '../../books/addbooks.service';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css']
})
export class UpdatebooksComponent implements OnInit {

  newBooks = {
    booksId :'',
    booksTitle:'',
    authorName:'',
    aboutAuthor:'',
    aboutBook:''
    }

  constructor(private bookService:AddbooksService,private router:Router) { }

  

  ngOnInit(): void {
 
    let booksId = localStorage.getItem("editbooksId");
    this.bookService.getBookValue(booksId).subscribe((data:any)=>{
      this.newBooks=JSON.parse(JSON.stringify(data));
    });
    
  }
  editBooks()
  {
    this.bookService.getBook(this.newBooks);   
    alert("Success");
    this.router.navigate(['adminhome']);
  }

}
