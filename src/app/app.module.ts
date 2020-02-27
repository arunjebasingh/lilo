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

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,



  ],
  exports : [
    FormsModule,

  ],
  providers: [GoogleBookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
