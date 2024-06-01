import {Component, OnInit} from '@angular/core';
import {BackendService} from "./services/backend.service";
import {Author, MockData, AuthorSortType} from "./models/models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  authors: Author[] = []
  title = 'act';
  authorCount: number = 10
  showNewAuthorForm: boolean = false
  newAuthorForm!: FormGroup;
  searchText: string = ''

  authorType = Object.values(AuthorSortType);
  authorSortType!: AuthorSortType;

  // readonly AuthorSortType: typeof AuthorSortType = AuthorSortType
  constructor(private backService: BackendService,
              private fb: FormBuilder) {
  }

  ngOnInit() {

    this.backService.getAllAuthor().subscribe(
      (res: Author[]) => {
        this.authors = res
        this.authorSortType = AuthorSortType.name
        console.log(this.authorSortType)
        this.onAuthorTypeChange()
      })

  }

  showMore() {
    this.authorCount = this.authorCount + 10
  }

  initializeNewAuthorForm() {
    this.showNewAuthorForm = true
    this.newAuthorForm = this.fb.group({
      id: [this.authorCount + 1, Validators.required],
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      totalPosts: [0, Validators.required],
      totalComments: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.newAuthorForm.valid) {
      const newAuthor: Author = this.newAuthorForm.value;
      this.backService.addNewAuthor(newAuthor, this.authorCount).subscribe((res: Author[]) => {
        this.authors = res
      })
      this.authorCount = this.authorCount + 1
      this.showNewAuthorForm = false
    }
  }



  // onKeyupSearch(event: KeyboardEvent) {
  //   const searchTerm = (event.target as HTMLInputElement).value;
  //   this.searchFullText(searchTerm);
  // }

  searchFullText(searchTerm: string) {
    if (!searchTerm)
      return
    else {
      this.backService.searchFullText(searchTerm).subscribe((res: Author[]) => {
        this.authors = res
      })
    }
  }

  onAuthorTypeChange(): void {
    this.authors.sort((a, b) => {
      const valueA = a[this.authorSortType];
      const valueB = b[this.authorSortType];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      }
      else if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB);
      }
      return 0;
    });
  }
}

