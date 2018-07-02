import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private api_key = 'YOUR_API_KEY';
  private base_uri = 'https://api.themoviedb.org/3/';
  private images_uri = 'https://image.tmdb.org/t/p/';
  private language = 'es-ES';

  constructor(private httpClient: HttpClient) { }

  public getPopulares(): Observable<any> {
    const url = `${this.base_uri}discover/movie`;
    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('sort_by', 'popularity.desc')
      .set('language', this.language);
    return this.httpClient.get<any>(url, {params});
  }

  public getInfantiles(): Observable<any> {
    const url = `${this.base_uri}discover/movie`;
    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('sort_by', 'popularity.desc')
      .set('language', this.language)
      .set('certification_country', 'US')
      .set('certification.lte', 'G');
    return this.httpClient.get<any>(url, {params});
  }

  public getCartelera(): Observable<any> {
    const url = `${this.base_uri}discover/movie`;
    const releaseDateLte = new Date();
    const releaseDateGte = new Date();
    releaseDateGte.setMonth(releaseDateLte.getMonth() - 1);
    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('sort_by', 'popularity.desc')
      .set('language', this.language)
      .set('primary_release_date.gte',
        `${releaseDateGte.getUTCFullYear()}-${releaseDateGte.getUTCMonth() + 1}-${releaseDateGte.getUTCDate()}`)
      .set('primary_release_date.lte',
        `${releaseDateLte.getUTCFullYear()}-${releaseDateLte.getUTCMonth() + 1}-${releaseDateLte.getUTCDate()}`);
    return this.httpClient.get<any>(url, {params});
  }

  public getPelicula(id: number): Observable<any> {
    const url = `${this.base_uri}movie/${id}`;
    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('language', this.language);
    return this.httpClient.get<any>(url, {params});
  }

  public searchPeliculas(query: string): Observable<any> {
    const url = `${this.base_uri}search/movie`;
    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('language', this.language)
      .set('query', query);
    return this.httpClient.get<any>(url, {params});
  }

}
