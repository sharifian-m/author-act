import {Component, Input, OnInit} from '@angular/core';

import {Comment} from "../models/models";
import {BaseComponent} from "../base.component";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})

export class CommentsComponent extends BaseComponent implements OnInit{
  @Input() comments:Comment[]=[]
  b:any
  constructor() {
super();
  }
ngOnInit() {
  this.b=this.getCurrentPageData(this.comments)
}

  // set data(value: Article[] | Comment[]) {
  //   this._data = value;
  // }
  //
  // get data(): Article[] | Comment[] {
  //   return this._data;
  // }

  // ngOnInit() {
    // this.route.params.subscribe(param => {
    //   const id = param['id']
    // })
    // this.route.paramMap.subscribe(paramMap => {
      //
      // const id = paramMap.get('id');
      // if (id) {
    //     this.backService.getAllAuthor().subscribe((authors: Author[]) => {
    //       console.log(authors)
    //       let foundAuthor: Author | undefined = authors?.find((author: Author) => author.id === +(id))
    //       if (foundAuthor !== undefined) {
    //         this.author = foundAuthor
    //       }
    //       console.log(this.author)
    //
    //     })
    //   }
    //
    // })

    // this.backService.getArticle().subscribe(
    //   (res: Author[]) => {
    //     this.articles = res
    //   })
    //
    // this.backService.getComments().subscribe(
    //   (res: Author[]) => {
    //     this.comments = res
    //   })
  // }


  // get articlesPageCount(): number {
  //   return Math.ceil(this.articles.length / this.itemsPerPage);
  // }
  //
  // get commentsPageCount(): number {
  //   return Math.ceil(this.comments.length / this.itemsPerPage);
  // }
  //
  // get currentArticles(): Article[] {
  //   const startIndex = (this.articlesCurrentPage - 1) * this.itemsPerPage;
  //   return this.articles.slice(startIndex, startIndex + this.itemsPerPage);
  // }
  //
  // get currentComments(): Comment[] {
  //   const startIndex = (this.commentsCurrentPage - 1) * this.itemsPerPage;
  //   return this.comments.slice(startIndex, startIndex + this.itemsPerPage);
  // }

// تغییر صفحه
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
