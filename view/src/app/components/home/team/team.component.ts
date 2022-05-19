import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {
  user: string = '';
  adm: boolean;
  type?: string;
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.type = localStorage.getItem("CLASS");

    if(this.type !== '0' && this.type !== '1'){
      this.router.navigateByUrl('/');
    }

    this.user = localStorage.getItem("NAME");
    this.type == '0' ? this.adm = true : this.adm = false; 

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
