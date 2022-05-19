export class Usuarios {
  constructor(_id = '', nombre = '', apellido = '', email = '', user = '', pass = '') {
    this._id = _id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.user = user;
    this.pass = pass;
  }

  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  user: string;
  pass: string;
}

export interface ResponseI {
  "_id": string,
  "nombre": string,
  "user": string,
  "accessToken": string,
  "expiresIn": string,
  "class": string,
  "status": string
}