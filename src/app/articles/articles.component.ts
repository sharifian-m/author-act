import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from "../base.component";
import {Article} from "../models/models";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent extends  BaseComponent implements OnInit{
@Input() articles:Article[]=[]
  a:any
  constructor() {
super()
  }


  ngOnInit() {
    console.log('this.articles',this.articles)
this.a=this.getCurrentPageData(this.articles)
    console.log(this.a)
  }

  // set data(value: Article[] | Comment[]) {
  //   this._data = value;
  // }
  //
  // get data(): Article[] | Comment[] {
  //   return this._data;
  // }



//   get articlesPageCount(): number {
//     return Math.ceil(this.articles.length / this.itemsPerPage);
//   }
//
//   get commentsPageCount(): number {
//     return Math.ceil(this.comments.length / this.itemsPerPage);
//   }
//
//   get currentArticles(): Article[] {
//     const startIndex = (this.articlesCurrentPage - 1) * this.itemsPerPage;
//     return this.articles.slice(startIndex, startIndex + this.itemsPerPage);
//   }
//
//   get currentComments(): Comment[] {
//     const startIndex = (this.commentsCurrentPage - 1) * this.itemsPerPage;
//     return this.comments.slice(startIndex, startIndex + this.itemsPerPage);
//   }
//
// // تغییر صفحه
//   changeCommentsPage(newPage: number): void {
//     this.commentsCurrentPage = newPage;
//   }
//
//   changeArticlesPage(newPage: number): void {
//     this.articlesCurrentPage = newPage;
//   }

  // get pages(): number[] {
  //   return Array.from({ length: this.pageCount }, (_, index) => index + 1);
  // }
}
