import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, Equipo } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: Equipo[] = [];

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  // tslint:disable-next-line: typedef
  private cargarInfo() {

    this.http.get('assets/data/data-pagina.json')
      .subscribe ( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });

  }

  // tslint:disable-next-line: typedef
  private cargarEquipo() {

    this.http.get ('https://ionic-6-curso.firebaseio.com/equipo.json')
    .subscribe ( (equip: Equipo[]) => {
      this.equipo = equip;
    });


  }




}
