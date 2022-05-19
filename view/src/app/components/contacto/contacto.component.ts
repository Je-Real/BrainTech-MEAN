import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: []
})
export class ContactoComponent implements OnInit {
  fecha : number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    var time = Math.random() * (2000 - 500) + 500;

    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    
    var loader = function() {
      $('#inicio, #nosotros, #servicios, #login').removeClass('cta');
      $('#contacto').addClass('cta');
      
      setTimeout(function() { 
        if($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();
  }
}
