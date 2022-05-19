import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/models/posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
  ]
})

export class BlogComponent implements OnInit {
  fecha: number = new Date().getFullYear();

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    var time = Math.random() * (2000 - 500) + 500;

    var loader = function () {
      $('#servicios, #nosotros, #contacto, #login').removeClass('cta');
      $('#inicio').addClass('cta');
      
      $('html, body').animate({ scrollTop: 0 }, 'fast');

      setTimeout(function () {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();

    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(res => {
        this.postService.posts = res as Posts[];
      });
  }

}
