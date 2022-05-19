import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: []
})
export class NosotrosComponent implements OnInit {
  fecha : number = new Date().getFullYear();
  title = 'BrainTech - Nosotros';

  constructor() { }

  ngOnInit(): void {
    var time = Math.random() * (2000 - 500) + 500;

    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    
    var loader = function() {
      $('#inicio, #contacto, #servicios, #login').removeClass('cta');
      $('#nosotros').addClass('cta');

      setTimeout(function() {
        if($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();
  }
}
