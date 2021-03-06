import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin';
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['user']);
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }

  register() : void {
    if(true){
     this.router.navigate(["register"]);
    }else {
      alert("Invalid credentials");
    }
  }



 addBook() : void {
    if(true){
     this.router.navigate(["app-book-add"]);
    }else {
      alert("Invalid credentials");
    }
  }

}
