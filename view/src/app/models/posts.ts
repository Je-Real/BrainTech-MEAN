export class Posts {
  constructor(_id = '', titulo = '', contenido = '', imgCabecera = '', autor = localStorage.getItem("NAME")) {
    this._id = _id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.imgCabecera = imgCabecera;
    this.fecha = new Date();
    this.autor = autor;
  }

  _id: string;
  titulo: string;
  contenido: string;
  imgCabecera: string;
  fecha: Date = new Date();
  autor: string = localStorage.getItem("NAME");
}
