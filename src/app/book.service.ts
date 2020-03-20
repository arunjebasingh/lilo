import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './book';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class BookService {
  private bookUrl = 'http://localhost:8080';  // URL to REST API
  constructor(private http: HttpClient) { }
  /** GET users from the server */

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl + '/book');
  }
  /** GET book by id. Will 404 if id not found */
  getBook(id: string): Observable<any> {
    const url = `${this.bookUrl}/book/${id}`;
    return this.http.get<Book>(url);
  }
  /** POST: add a new book to the server */
  addBook(book: Book) {
	console.log(book);
    return this.http.post(this.bookUrl + '/book', book, { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), responseType: 'text' as 'json'});
  }
  /** PUT: update the book on the server */
  updateBook(book: Book): Observable<any> {
    return this.http.put(this.bookUrl + '/book', book, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }
  /** DELETE: delete the book from the server */
  deleteBook(book: Book) {
	  if (confirm("Are you sure to delete?")) {
		const url = `${this.bookUrl}/book`;
		console.log(book);
		const options = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json',
		  }),
			body: book,
		  responseType: 'text' as 'json'
		};
		return this.http.delete(url, options);
	  }
	  return of({});
  }
}
