import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { PostCreateComponent } from './posts/post-create/post-create.components';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SearchComponent } from './search/search.component';
import { GoogleBookApiService } from './google-book-api.service';
import { StarComponent } from './star/star.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    SearchComponent,
    StarComponent,
    LogoutComponent,
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    BookDetailComponent,
    AboutComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    RouterModule,
    HttpClientModule,
    HttpModule,



  ],
  exports : [
    FormsModule,

  ],
  providers: [GoogleBookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
