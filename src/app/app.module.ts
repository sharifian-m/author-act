import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { HttpClientModule } from '@angular/common/http';
import {BackendService} from "./services/backend.service";
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ArticlesComponent} from "./articles/articles.component";
import {CommentsComponent} from "./comments/comments.component";
import {BaseComponent} from "./base.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorsComponent,
    ArticlesComponent,
    CommentsComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
