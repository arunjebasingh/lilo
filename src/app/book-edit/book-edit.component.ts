import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
	@Input() book: Book;
	constructor(private route: ActivatedRoute, private bookService: BookService, private location: Location) { }
	ngOnInit() {
		this.getBook();
	}
	getBook(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.bookService.getBook(id).subscribe(book => this.book = book);
	}
	save(): void {
		this.bookService.updateBook(this.book).subscribe(success=> {this.goBack();});
	}
	goBack(): void {
		this.location.back();
	}
}
