import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  fecha: number = new Date().getFullYear();
  nombre: string = '';

  constructor() { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem("NAME");
    if(this.nombre == null){
      this.nombre = ' ';
    }

    var time = Math.random() * (2000 - 500) + 500;

    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    
    var loader = function() {
      $('#servicios, #nosotros, #contacto, #login').removeClass('cta');
      $('#inicio').addClass('cta');

      setTimeout(function() {
        if($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();
  }

}
