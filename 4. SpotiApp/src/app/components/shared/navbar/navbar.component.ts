import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public token: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  public refreshToken() {
    this.spotifyService.refreshToken(this.token);
  }

}
