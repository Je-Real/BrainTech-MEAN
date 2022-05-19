import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-team-menu',
  templateUrl: './team-menu.component.html'
})
export class TeamMenuComponent implements OnInit {
  idSelected: string;
  nameSelected: string;
  faTrash = faTrash;

  type?: string;

  //notificación
  msj: string = '';
  t: string = '';

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    this.type = localStorage.getItem("CLASS");

    if(this.type !== '0' && this.type !== '1'){
      this.router.navigateByUrl('/');
    }

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

    this.getUsuarios();
  }

  idS(_id: string, _name: string) {
    this.nameSelected = _name;
    this.idSelected = _id;
  }

  getUsuarios() {
    this.usuarioService.getUsers()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuarios[];
      });
  }

  deleteUser(_id: string = this.idSelected) {
    this.usuarioService.deleteUsuario(_id)
      .subscribe(res => {
        console.log({ status: 'Post eliminado' });
        this.noti('Usuario eliminado', 'success');
        this.getUsuarios();
      });
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
