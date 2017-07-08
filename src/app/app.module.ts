import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { Ng2FileDropModule } from 'ng2-file-drop';
import * as firebase from 'firebase';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    LoginPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, Ng2FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
