import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private listaDeseosService: ListaDeseosService,
    private alertCtrl: AlertController
  ) {
    this.idx = navParams.get('idx');
    this.lista = navParams.get('lista');
  }

  ngOnInit() { }

  actualizar( item: ListaItem) {
    item.completado = !item.completado;

    let allCheck = true;
    for (let item of this.lista.items) {
      if(!item.completado) {
        allCheck = false;
        break;
      }
    }

    this.lista.terminada = allCheck;

    this.listaDeseosService.updateLista(this.lista, this.idx);
  }

  borrarLista() {
    const confirm = this.alertCtrl.create({
      title: `Eliminar "${this.lista.nombre}"`,
      message: '¿Seguro que quieres eliminar esta lista?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            console.log('Agree clicked');
            console.log(this.listaDeseosService.getListas());
            this.listaDeseosService.deleteLista(this.idx);
            this.navCtrl.pop();
            console.log(this.listaDeseosService.getListas());
          }
        }
      ]
    });
    confirm.present();
  }

}
