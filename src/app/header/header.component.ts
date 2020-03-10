import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{


constructor(private loginService : AuthenticationService,private router : Router) { }

btnClick = function () {
  this.router.navigateByUrl('/logout');
  }
}


