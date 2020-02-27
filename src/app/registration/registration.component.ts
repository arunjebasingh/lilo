import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  gender: string;
  firstname: string;
  lastname: string;
  address: string;
  email: string;
  password: string;


  constructor() { }

  ngOnInit() {
  }

  register() : void {
    
  }

}
