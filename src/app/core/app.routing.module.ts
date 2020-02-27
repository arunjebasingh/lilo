import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {SearchComponent} from '../search/search.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'search', component: SearchComponent },
  {path : '', component : LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
