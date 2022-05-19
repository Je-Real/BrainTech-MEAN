import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  //notificación
  msj: string = '';
  t: string = '';

  constructor(private usuariosService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    var time = Math.random() * (2000 - 500) + 500;

    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

    var loader = function () {
      $('#servicios, #nosotros, #contacto, #inicio').removeClass('cta');
      $('#login').addClass('cta');

      setTimeout(function () {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();
  }

  login(form?: NgForm): void {
    this.usuariosService.login(form.value)
      .subscribe(res => {
        if (res.status == '1') {
          this.noti('¡Perfecto! Iniciando sesión...', 'success');
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 3200);
        }
        else if (res.status == '2') {
          this.noti('El usuario y/o la contraseña son incorrectas.', 'warning');
        }
        else if (res.status == '4') {
          this.noti('Creo que te equivocaste. El usuario no existe.', 'warning');
        }
        else {
          console.log(res);
          this.noti('Error en el servidor', 'danger');
        }
      })
  }

  noti(mensaje: string = this.msj, tipo: string = this.t) {
    let idSec = new Date().getSeconds();
    let classRm = 'nRem' + idSec;

    $('#alert').append(
      "<div class='" + classRm + " animated fadeInRight alert-c alert-"
      + tipo + " py-2 my-2'>" +
      "<div class='container pl-0'>" +
      "<div class='d-flex'>" +
      "<p class='mb-0 ml-2 px-2 font-1_25x'><i class='ion ion-ios-warning'></i> " + mensaje + "</p>" +
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
