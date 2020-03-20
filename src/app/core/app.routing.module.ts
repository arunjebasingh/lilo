import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {SearchComponent} from '../search/search.component';
import {LogoutComponent} from '../logout/logout.component';
import { AuthGuardService } from '../service/auth-guard.service';
import { BookAddComponent } from '../book-add/book-add.component';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'search', component: SearchComponent, canActivate:[AuthGuardService] },
  { path : 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
  { path: 'app-book-add', component: BookAddComponent },
  { path: 'app-book-edit', component: BookEditComponent },
  { path: 'app-book-list', component: BookListComponent },
  { path: 'app-book-detail', component: BookDetailComponent },
  { path: 'app-about', component: AboutComponent },

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
