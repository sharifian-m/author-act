import {Component, OnInit} from '@angular/core';
import {BackendService} from "./services/backend.service";
import {Author, MockData} from "./models/models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data: Author[] = []
  title = 'act';
  authorCount: number = 10
  showNewAuthorForm: boolean = false
  newAuthorForm!: FormGroup;

  constructor(private backService: BackendService,
              private  fb:FormBuilder) {
  }

  ngOnInit() {

    this.backService.getAllAuthor().subscribe(
      (res: Author[]) => {
        this.data = res
      })

  }

  showMore() {
    this.authorCount = this.authorCount + 10
  }

  initializeNewAuthorForm() {
    this.showNewAuthorForm = true
    this.newAuthorForm=this.fb.group({
      id: [this.authorCount+1, Validators.required],
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      totalPosts: [0, Validators.required],
      totalComments: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.newAuthorForm.valid) {
      const newAuthor: Author = this.newAuthorForm.value;
      this.backService.addNewAuthor(newAuthor,this.authorCount).subscribe((res:Author[])=>{
      this.data=res
      })
      this.authorCount=this.authorCount+1
      this.showNewAuthorForm=false
    }
  }
}
