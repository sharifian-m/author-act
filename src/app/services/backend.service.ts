import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from 'rxjs/operators';
import {Author, MockData} from "../models/models";
import {Observable, of} from "rxjs";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private author: Author[] = []

  constructor(private http: HttpClient) {
    this.getAllAuthor().subscribe((res: Author[]) => {
      this.author = res
    })
  }

  getAllAuthor(): Observable<Author[]> {
    return this.http.get<MockData>('../../assets/mock-data.json').pipe(map((x: MockData) => x.author))
  }

  getArticle(): Observable<Author[]> {
    return this.http.get<MockData>('../../assets/mock-data.json').pipe(map((x: MockData) => x.article))
  }

  getComments(): Observable<Author[]> {
    return this.http.get<MockData>('../../assets/mock-data.json').pipe(map((x: MockData) => x.comment))
  }

  addNewAuthor(author: Author, index: number): Observable<Author[]> {
    this.author.splice(index, 0, author)
    return of(this.author)
  }

  searchFullText(searchTerm: string): Observable<Author[]> {
if (!searchTerm)
  return of(this.author)
      let filteredAuthors  = this.author.filter((author: Author) => {
       return Object.keys(author).some((prop: any) => {
        return  (String(author?.[prop]).toLowerCase().includes(searchTerm.toLowerCase().trim()))
        })
      })

    return of(filteredAuthors )
  }


}
