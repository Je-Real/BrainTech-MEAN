import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: []
})
export class ServiciosComponent implements OnInit {
  fecha: number = new Date().getFullYear();
  title = 'BrainTech - Servicios';

  constructor() { }

  ngOnInit(): void {
    var time = Math.random() * (2000 - 500) + 500;

    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    
    var loader = function () {
      $('#inicio, #nosotros, #contacto, #login').removeClass('cta');
      $('#servicios').addClass('cta');

      setTimeout(function () {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();
  }

}
