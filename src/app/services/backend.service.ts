import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from 'rxjs/operators';
import {Author, MockData} from "../models/models";
import {Observable, of} from "rxjs";

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

  addNewAuthor(author: Author, index: number): Observable<Author[]> {
    this.author.splice(index, 0, author)
    return of(this.author)
  }

}
