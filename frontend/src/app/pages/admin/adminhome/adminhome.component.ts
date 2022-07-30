import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  adminBooksUp:any;
  adminBooks:any;
  bookser:any;
  books:any;

  constructor() { }

  ngOnInit(): void {
  }

  bookStatus(status:any){}
  delete(id:any)
  {

  }

  addBooks(){
    
  }

}
