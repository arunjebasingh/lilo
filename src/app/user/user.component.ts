import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  storedPosts=[];


onAddPost(post){
  this.storedPosts.push(post);
}


  constructor() { }

  ngOnInit() {
  }

}
