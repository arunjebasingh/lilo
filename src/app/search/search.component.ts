import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../google-book-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit{
  books;

  constructor(private googleBookApiService: GoogleBookApiService) { }


  ngOnInit() {

  }

}
