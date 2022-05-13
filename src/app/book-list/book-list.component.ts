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
    fetch('https://mocki.io/v1/0ff46399-23d5-43ad-b401-a17442726895').then((resp) => resp.json()).then(
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
