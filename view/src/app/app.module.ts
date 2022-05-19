import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { Globals } from './globals';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';
import { MakerComponent } from './components/blog/maker/maker.component';
import { SoonComponent } from './components/soon/soon.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { RegisterComponent } from './components/accounts/register/register.component';
import { TeamMenuComponent } from './components/accounts/team-menu/team-menu.component';
import { TeamComponent } from './components/home/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ServiciosComponent,
    HomeComponent,
    ContactoComponent,
    BlogComponent,
    SoonComponent,
    LoginComponent,
    RegisterComponent,
    TeamComponent,
    MakerComponent,
    TeamMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
