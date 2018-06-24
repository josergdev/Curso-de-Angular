import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private urlSearch = 'https://api.spotify.com/v1/search';
  private urlArtist = 'https://api.spotify.com/v1/artists';

  private token: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'authorization':  'Bearer BQAWsi2Va0BDW6RCk6qaUVihByedUKZMmTC6QFY01bhqqYhALtHi6VAEJ2aOfEW4pr2HY37PafxCcveIklU',
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getArtistsList$(cadena: string): Observable<any> {
    const query = `${this.urlSearch}?q=${cadena}&type=artist`;
    return this.httpClient.get<any>(query, this.httpOptions);
  }

  public getArtist$(id: string): Observable<any> {
    const query = `${this.urlArtist}/${id}`;
    return this.httpClient.get<any>(query, this.httpOptions);
  }

  public getTopOfArtist$(id: string): Observable<any> {
    const query = `${this.urlArtist}/${id}/top-tracks?country=ES`;
    return this.httpClient.get<any>(query, this.httpOptions);
  }

  public refreshToken(token: string) {
    this.token = token;
    console.log(this.httpOptions);
  }

}
