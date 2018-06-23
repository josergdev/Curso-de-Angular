import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist: any;
  public topOfArtist: any;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.spotifyService.getArtist$(params['id']).subscribe(data => this.artist = data);
      this.spotifyService.getTopOfArtist$(params['id']).subscribe(data => {
        this.topOfArtist = data.tracks;
        console.log(data.tracks);
      });
    });

  }

}
