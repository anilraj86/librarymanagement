import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddbooksService } from '../../books/addbooks.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  books:any=[];
  constructor(private bookService:AddbooksService,private router:Router) { }

  ngOnInit(): void {

    this.bookService.getBooks()
    .subscribe(res=>{
      console.log(res);
      this.books=JSON.parse(JSON.stringify(res));
    });

  }
  
}
