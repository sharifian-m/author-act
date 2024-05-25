
export interface MockData {
  comment: Comment[];
  article: Article[];
  author: Author[];
}
export class Article {
  id?: number;
  type?: ArticleType;
  title?: string;
  createdOn?: number;

  constructor(props?: Partial<Article>) {
    Object.assign(this, props);
  }
}

export enum ArticleType {
  Article = 'ARTICLE',
  Book = 'BOOK'
}


export class Author {
  [key: string]: any
  id?: number;

  name?: string;

  imageUrl?: string;

  totalPosts?: number;

  totalComments?: number;

  constructor(props?: Partial<Author>) {
    Object.assign(this, props);
  }
}

export enum AuthorSortType {
  Name = 'name',
  totalPosts = 'total-posts',
  totalComments = 'total-comments',
}
export class Comment {
  id?: number;

  user?: string;

  title?: string;

  createdOn?: number;

  constructor(props?: Partial<Comment>) {
    Object.assign(this, props);
  }
}
