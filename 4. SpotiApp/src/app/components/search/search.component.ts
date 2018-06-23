import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artists: any;
  public cadena = '';

  public message: string;
  public fullError: any;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  public buscarArtistas() {
    this.spotifyService.getArtistsList$(this.cadena).subscribe(this.getArtists, this.catchError);
  }


  private getArtists = data => {
    this.artists = data.artists.items;
    console.log(this.artists);
    this.message = 'artists Ok';
  }

  private catchError = err => {
    this.fullError = err;
    if (err instanceof HttpErrorResponse) {
      this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
  }





}
