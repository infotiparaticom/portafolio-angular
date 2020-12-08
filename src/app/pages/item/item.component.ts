import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoIndividual } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoIndividual;
  id: string;


  constructor( private route: ActivatedRoute,
               public productosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(parametros => {
        console.log(parametros.id);
        this.productosService.getProducto(parametros.id)
          .subscribe ( (prod: ProductoIndividual) => {
            this.id = parametros.id;
            this.producto = prod;

          });

      });

  }

}
