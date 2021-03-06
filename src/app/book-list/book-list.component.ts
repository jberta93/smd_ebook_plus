import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books: any[] = [];
  constructor() { }


  getBooks() {
    fetch('http://141.94.220.228/books.json').then((resp) => resp.json()).then(
      (resp) => {
        this.books = resp.books;
      }
    ).catch((error) => {
      console.log(error);
    }); 
  }

  ngOnInit(): void {
    this.getBooks();
  }

}
