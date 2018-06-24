import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  private listas: Lista[] = [];

  constructor(private httpClient: HttpClient) {

    this.getData();

    console.log('Servicio inicializado');
    console.log(this.listas);
  }

  updateData() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  getData() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  getListas(): Lista[] {
    this.getData();
    return this.listas;
  }

  updateLista(lista: Lista, idx: number) {
    this.listas[idx] = lista;
    this.updateData();
  }

  addLista(lista: Lista) {
    this.listas.push(lista);
    this.updateData();
  }

  deleteLista(idx: number) {
    this.listas.splice(idx, 1);
    this.updateData();
  }

}
