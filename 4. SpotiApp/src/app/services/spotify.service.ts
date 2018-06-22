import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private url = 'https://api.spotify.com/v1/search';

  constructor(private httpClient: HttpClient) { }

  public getArtistsList$(): Observable<any[]> {
    const query = `${this.url}?q=metallica&type=artist`;
    return this.httpClient.get<any[]>(query);
  }

}
