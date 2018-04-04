import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

books: any;
  // httpclient peticiones get ,post, put delete
  constructor(private http: HttpClient) {}

  //cuando se arranque angular de forma automatica...llevame a /book
  //suscribe es meteme en books los datos
 ngOnInit() {
  this.http.get('/book').subscribe(data => {
    this.books = data;
  });
}

}
