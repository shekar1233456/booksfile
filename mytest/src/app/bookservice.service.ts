import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private book_api='https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json'

  constructor(private http:HttpClient) { }

  getBooks():Observable<any>{
    return this.http.get<any>(this.book_api)
  }
}
