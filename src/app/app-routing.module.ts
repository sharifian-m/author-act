import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorComponent} from "./author/author.component";


const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'author/:id', component: AuthorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
