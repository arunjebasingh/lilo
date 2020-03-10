import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {SearchComponent} from '../search/search.component';
import {LogoutComponent} from '../logout/logout.component';
import { AuthGuardService } from '../service/auth-guard.service';


const routes: Routes = [
  { path: 'user', component: UserComponent, canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent, canActivate:[AuthGuardService] },
  { path: 'search', component: SearchComponent, canActivate:[AuthGuardService] },
  { path : 'logout', component: LogoutComponent, canActivate:[AuthGuardService] }
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
