import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  // tslint:disable-next-line: typedef
  cargarProductos() {

    this.http.get('https://ionic-6-curso.firebaseio.com/productos_idx.json')
    .subscribe ( (prod: Producto[]) => {
      console.log(prod);
      this.productos = prod;
      this.cargando = false;
    });
  }


  // tslint:disable-next-line: typedef
  getProducto(id: string) {

    return this.http.get(`https://ionic-6-curso.firebaseio.com/productos/${id}.json`);

  }



}
