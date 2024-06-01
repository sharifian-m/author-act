import {Component, Input} from '@angular/core';
import {Article} from "./models/models";


@Component({template: ''})

export class BaseComponent {
  itemsPerPage: number = 10;
  currentPage: number = 1;
  bgClass: string[] = ['bg-rose-toupe','bg-rose-taupe','bg-sky-magenta','bg-crayola','bg-tekhelet','bg-orange','bg-blue','bg-lemon','bg-sky-magenta','bg-crayola','bg-tekhelet']

  constructor() {}

  pageCount(data: Article[] | Comment[]): number {
    return Math.ceil(data.length / this.itemsPerPage);
  }

  getCurrentPageData(datalist:any):any {
    console.log('datalist',datalist)
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    console.log('datalist.slice(startIndex, startIndex + this.itemsPerPage);',datalist.slice(startIndex, startIndex + this.itemsPerPage))
    return datalist.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
  }

}
