import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

	books: Book[] = [];
	constructor(private route: ActivatedRoute, private bookService: BookService) { }
	ngOnInit() {
		this.getBooks();
	}
	getBooks(): void {
		this.bookService.getBooks().subscribe(books => this.books = books);
	}
	delete(book: Book): void {
		this.bookService.deleteBook(book).subscribe(success=> {this.getBooks();});
  }

}
