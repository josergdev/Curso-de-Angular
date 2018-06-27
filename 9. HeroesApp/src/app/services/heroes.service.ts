import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL: String = 'https://heroesapp-a91b0.firebaseio.com/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public nuevoHeroe(heroe: Heroe) {
    const url = `${this.heroesURL}heroes.json`;
    const body = heroe;
    const httpOptions = this.httpOptions;
    return this.httpClient.post<any>(url, body, httpOptions);
  }

  public actualizarHeroe(heroe: Heroe, key$: string) {
    const url = `${this.heroesURL}heroes/${key$}.json`;
    const body = heroe;
    const httpOptions = this.httpOptions;
    return this.httpClient.put<any>(url, body, httpOptions);
  }

  public getHeroe( key$: string) {
    const url = `${this.heroesURL}heroes/${key$}.json`;
    const httpOptions = this.httpOptions;
    return this.httpClient.get<Heroe>(url, httpOptions);
  }

  public getHeroes() {
    const url = `${this.heroesURL}heroes.json`;
    const httpOptions = this.httpOptions;
    return this.httpClient.get<any>(url, httpOptions);
  }

  public borrarHeroe(id: string) {
    const url = `${this.heroesURL}heroes/${id}.json`;
    const httpOptions = this.httpOptions;
    return this.httpClient.delete(url, httpOptions);
  }

}
