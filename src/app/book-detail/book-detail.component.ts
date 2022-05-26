import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare global {
  interface Window { ePub: any; }
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book: any;
  public epub: any;
  public rendition: any;
  
  constructor(private route: ActivatedRoute) {
  }

  getDetails(bookId: number) {
    fetch('http://141.94.220.228/books.json').then((resp) => resp.json()).then(
      (resp) => {
        this.book = resp.books.find((el: any) => el.id === bookId); // todo
        this.openBook();

      }
    ).catch((error) => {
      console.log(error);
    });
  }

  openBook() {
    this.epub = window.ePub(this.book.url);

    this.epub.loaded.spine.then (() => {
      this.rendition = this.epub.renderTo("area",{ flow: "paginated", width: "100%", height: "700px", allowScriptedContent: true });
      this.rendition.display();
    }, {});
  }

  next() {
    this.rendition.next();
  }

  prev() {
    this.rendition.prev();
  }

  ngOnInit(): void {
    let bookId = parseInt(this.route.snapshot.params['id']); // prelevo l'id dall'url
    this.getDetails(bookId);  
  }
}
