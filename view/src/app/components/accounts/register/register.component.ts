import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
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


  register(form?: NgForm): void {
    this.usuariosService.register(form.value)
      .subscribe(res => {
        if (res.status == '1') {
          $('#ftco-loader').addClass('show');
          this.noti('Registrado con éxito. Inicia sesión por favor', 'success');
          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 3200);
        }
        else if (res.status == '2') {
          this.noti('El usuario o el E-mail ya están en uso. Lo sentimos', 'warning');
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
