import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookApiService {

  constructor(private http: Http) { }


  SearchBooks(search) {
    const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q="+ search +"&maxResults=12&key=AIzaSyDup72xWluXgGmKdihGJMGLW9IpD1i4AW0");
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

  SearchByISBN(isbn){
  var encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn +"&maxResults=1&key=AIzaSyDup72xWluXgGmKdihGJMGLW9IpD1i4AW0");
  return this.http.get(encodedURI)
      .map((response: Response) => response.json());
}


}
