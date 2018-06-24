import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})

export class TerminadosComponent implements OnInit {

  constructor(public listaDeseosService: ListaDeseosService, private navController: NavController) { }

  ngOnInit() { }

  doAgregar() {
    this.navController.push(AgregarComponent);
  }

  verDetalle(lista, idx) {
    this.navController.push(DetalleComponent, {lista, idx});
  }

}
