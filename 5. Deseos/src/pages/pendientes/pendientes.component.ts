import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista, ListaItem } from '../../app/classes/index';


@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {

  constructor(public listaDeseosService: ListaDeseosService, private navController: NavController) { }

  ngOnInit() { }

  doAgregar() {
    this.navController.push(AgregarComponent);
  }

  verDetalle(lista, idx) {
    this.navController.push(DetalleComponent, {lista, idx});
  }

}
