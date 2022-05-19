import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: []
})
export class SoonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    var time = Math.random() * (2000 - 500) + 500;

    var loader = function() {
      $('#servicios, #nosotros, #contacto, #login').removeClass('cta');
      $('#inicio').addClass('cta');
      
      $('html, body').animate({scrollTop:0}, 'fast');
      
      setTimeout(function() {
        if($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, time);
    };
    loader();
  }

}
