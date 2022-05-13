import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book: any;
  constructor(private route: ActivatedRoute) { }


  getDetails(bookId: number) {
    fetch('https://mocki.io/v1/0ff46399-23d5-43ad-b401-a17442726895').then((resp) => resp.json()).then(
      (resp) => {
        this.book = resp.books.find((el: any) => el.id === bookId); // todo
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    let bookId = parseInt(this.route.snapshot.params['id']); // prelevo l'id dall'url
    this.getDetails(bookId);  
  }

}
