import { Component } from '@angular/core';
import * as $ from 'jquery';

import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})

export class AppComponent {
	title = 'BrainTech';
	fecha: number = new Date().getFullYear();

	type: string;
	
	constructor(public users: UsuarioService, public router: Router) { }

	ngOnInit(): void {
		$(document).ready(function () {
			$('html, body').animate({ scrollTop: 0 }, 'fast');
		});

		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
					$('#padding').addClass('s');
				}
			}
			else {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
					$('#padding').removeClass('s');
				}
			}

			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			else {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	}

	sesionGetter(): boolean{
		if(this.users.getToken()){
		  this.type = localStorage.getItem("CLASS");
			return true;
		}
		else{
			return false;
		}
	}

	logout() {
		$('#ftco-loader').addClass('show');
		this.users.logout();
		setTimeout(() => {
			this.router.navigateByUrl('/');
		}, 3200);
	}
}