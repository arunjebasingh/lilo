import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector    : 'app-post-create',
  templateUrl : './post-create.component.html',
  styleUrls   : ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle="";
  enteredContent="";
  @Output() postCreated = new EventEmitter();
  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hoverState=0;

  onStarEnter(starId: number){
    this.hoverState = starId;
  }

  onStarLeave(){
    this.hoverState=0;
  }

  onStarClicked(starId: number){
    this.rating = starId;
  }

onAddPost(){
const post={
             title: this.enteredTitle,
             content: this.enteredContent };

             this.postCreated.emit(post);

  }
}
