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
    fetch('https://mocki.io/v1/5328c70f-2c7d-4fb3-a79d-3bda6de5bdd3').then((resp) => resp.json()).then(
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
