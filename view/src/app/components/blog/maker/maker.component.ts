import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { NgForm } from '@angular/forms';

import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/models/posts';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html'
})

export class MakerComponent implements OnInit {
  faTrash = faTrash; faEdit = faEdit;

  user: string;
  adm: boolean;
  type?: string;

  //notificación
  msj: string = '';
  t: string = '';

  constructor(public postService: PostService, public router: Router) { }

  ngOnInit(): void {
    this.type = localStorage.getItem("CLASS");

    if(this.type !== '0' && this.type !== '1'){
      this.router.navigateByUrl('/');
    }

    this.type == '0' ? this.adm = true : this.adm = false;
    console.log(this.type, ' - ', this.user);
    this.user = localStorage.getItem("NAME");

    var time = Math.random() * (2000 - 500) + 500;

    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

    var loader = function () {
      $('#servicios, #nosotros, #contacto, #login').removeClass('cta');
      $('#inicio').addClass('cta');

      setTimeout(function () {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();

    this.getPosts();
  }

  addPost(form?: NgForm) {
    if (form.value._id) {
      this.postService.updatePost(form.value)
        .subscribe(res => {
          this.resetForm(form);
          console.log({ html: 'Post modificado correctamente' });
          this.getPosts();
        });
    }
    else {
      console.log(form.value);
      this.postService.addPost(form.value)
        .subscribe(res => {
          this.resetForm(form);
          console.log({ html: 'Post guardado correctamente' });
          this.getPosts();
        });
    }
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(res => {
        this.postService.posts = res as Posts[];
      })
  }

  editPost(Post: Posts) {
    this.postService.selectedPost = Post;
    this.noti();
  }

  deletePost(_id: string) {
    this.postService.deletePost(_id)
      .subscribe(res => {
        if (confirm('Quieres eliminar este Post?')) {
          console.log({ html: 'Post eliminado' });
          this.getPosts();
        }
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.postService.selectedPost = new Posts();
      this.getPosts();
    }
  }

  noti(mensaje: string = this.msj, tipo: string = this.t) {
    let idSec = new Date().getSeconds();
    let classRm = 'nRem' + idSec;

    $('#alert').append(
      "<div class='" + classRm + " animated fadeInRight alert-c alert-"
      + tipo + " py-2 my-2'>" +
      "<div class='container pl-0'>" +
      "<div class='d-flex'>" +
      "<p class='mb-0 ml-2 px-2 font-1_25x'><b>Alerta:</b>" + mensaje + "</p>" +
      "</div>" +
      "</div>" +
      "</div>"
    );

    setTimeout(function () {
      $('.' + classRm).removeClass('fadeInRight');
      $('.' + classRm).addClass('fadeOutUp');

      setTimeout(function () {
        $('.' + classRm).remove();
      }, 3050);
    }, 3000);
  }

}
