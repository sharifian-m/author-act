import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BackendService} from "../services/backend.service";
import {Article, Author, Comment} from "../models/models";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent implements OnInit {
  author: Author = {}
  articles: Article[] = []
  comments: Comment[] = []
  itemsPerPage: number = 10;
  // _data: Article[] | Comment[]=[]
  commentsCurrentPage: number = 1;
  articlesCurrentPage: number = 1;

  constructor(private route: ActivatedRoute,
              private backService: BackendService,) {

  }

  // set data(value: Article[] | Comment[]) {
  //   this._data = value;
  // }
  //
  // get data(): Article[] | Comment[] {
  //   return this._data;
  // }

  ngOnInit() {
    // this.route.params.subscribe(param => {
    //   const id = param['id']
    // })
    this.route.paramMap.subscribe(paramMap => {

      const id = paramMap.get('id');
      if (id) {
        this.backService.getAllAuthor().subscribe((authors: Author[]) => {
          console.log(authors)
          let foundAuthor: Author | undefined = authors?.find((author: Author) => author.id === +(id))
          if (foundAuthor !== undefined) {
            this.author = foundAuthor
          }
          console.log(this.author)
          this.backService.getArticle().subscribe(
            (res: Author[]) => {
              this.articles = res
              console.log(' this.articles', this.articles)
            })

          this.backService.getComments().subscribe(
            (res: Author[]) => {
              this.comments = res
              console.log(' this.comments', this.comments)
            })
        })
      }

    })


  }

  //
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
