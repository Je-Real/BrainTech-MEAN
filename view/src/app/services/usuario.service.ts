import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuarios, ResponseI } from '../models/usuarios';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  selectedUsuario: Usuarios;
  usuarios: Usuarios[];

  readonly URL_API = 'http://localhost:3000/api/users';
  userObject = new BehaviorSubject(false);
  private token: string;

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuarios();
  }

  register(usuario: Usuarios): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.URL_API}/register`, usuario).pipe(
      tap(
        (res: ResponseI) => {
          //console.log(res);
          if (res.status) {
            this.logout();
            localStorage.setItem("STATUS", res.status);
          }
        })
    );
  }

  login(usuario: Usuarios): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.URL_API}/login`, usuario).pipe(
      tap(
        (res: ResponseI) => {
          if (res) {//guardad token
            this.saveToken(res.nombre, res.user, res.accessToken, res.expiresIn, res.class);
          }
          else if (res.status) {
            this.logout();
            localStorage.setItem("STATUS", res.status);
          }
        })
    );
  }

  getUsers() {
    return this.http.get(`${this.URL_API}/`);
  }

  deleteUsuario(_id: string) {
    return this.http.delete(`${this.URL_API}/delete/${_id}`);
  }

  logout() {
    this.token = null;
    localStorage.removeItem("NAME");
    localStorage.removeItem("USER");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    localStorage.removeItem("CLASS");
  }

  private saveToken(name: string, user: string, token: string, expiresIn: string, type?: string): void {
    localStorage.setItem("NAME", name);
    localStorage.setItem("USER", user);
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    if (type !== null) {
      localStorage.setItem("CLASS", type);
    }

    this.token = token;
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  /*getUsuarios() {
    return this.http.get(this.URL_API);
  }

  addUsuario(usuario: Usuarios) {
    return this.http.post(this.URL_API, usuario);
  }

  *updateUsuario(usuario: Usuarios) {
    return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
  }*/

}