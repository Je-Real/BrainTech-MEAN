import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TeamComponent } from './components/home/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';
import { MakerComponent } from './components/blog/maker/maker.component';
import { SoonComponent } from './components/soon/soon.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { RegisterComponent } from './components/accounts/register/register.component';
import { TeamMenuComponent } from './components/accounts/team-menu/team-menu.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teamHome', component: TeamComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'maker', component: MakerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminUsers', component: TeamMenuComponent },
  { path: 'soon', component: SoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
