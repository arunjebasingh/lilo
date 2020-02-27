
import { Component, Input} from '@angular/core';


@Component({
  selector : 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent{
//posts= [
//{title:'first post', content: 'first'},
//{title:'second post', content: 'second'},
//{title:'third post', content: 'third'},
//];

@Input() posts=[];
}
