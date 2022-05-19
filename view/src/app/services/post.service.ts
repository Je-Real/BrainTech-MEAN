import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  selectedPost: Posts;
  posts: Posts[];
  readonly URL_API = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {
    this.selectedPost = new Posts();
  }

  getPosts() {
    return this.http.get(this.URL_API);
  }

  addPost(post: Posts) {
    return this.http.post(this.URL_API, post);
  }

  updatePost(post: Posts) {
    return this.http.put(this.URL_API + `/${post._id}`, post);
  }

  deletePost(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

