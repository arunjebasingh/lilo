import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
	@Input() book: Book = { bookName: '', ISBN: '', author: '' , bookImage: ''};
	constructor(private bookService: BookService, private location: Location) { }
	ngOnInit() {
	}
	save(): void {
		this.bookService.addBook(this.book).subscribe(() => this.goBack());
	}
	goBack(): void {
		this.location.back();
	}
}
