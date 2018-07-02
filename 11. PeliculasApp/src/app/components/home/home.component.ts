import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../intefaces/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public populares: Pelicula[] = [];
  public infantiles: Pelicula[] = [];
  public cartelera: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getPopulares();
    this.getInfantiles();
    this.getCartelera();
  }

  private getCartelera() {
    this.peliculasService.getCartelera()
      .subscribe( data => {
        console.log(data.results);
        let i = 0;
        for (const result of data.results) {
          if (i >= 6) {
            break;
          }
          const pelicula: Pelicula = {
            id: result.id,
            title: result.title,
            overview: result.overview,
            releaseDate: result.release_date,
            backdropPath: result.backdrop_path,
            posterPath: result.poster_path,
            popularity: result.popularity,
            voteAverage: result.vote_average
          };
          this.cartelera.push(pelicula);
          i++;
        }
        console.log(this.cartelera);
      });
  }

  private getPopulares() {
    this.peliculasService.getPopulares()
      .subscribe( data => {
        console.log(data.results);
        let i = 0;
        for (const result of data.results) {
          if (i >= 6) {
            break;
          }
          const pelicula: Pelicula = {
            id: result.id,
            title: result.title,
            overview: result.overview,
            releaseDate: result.release_date,
            backdropPath: result.backdrop_path,
            posterPath: result.poster_path,
            popularity: result.popularity,
            voteAverage: result.vote_average
          };
          this.populares.push(pelicula);
          i++;
        }
        console.log(this.populares);
      });
  }

  private getInfantiles() {
    this.peliculasService.getInfantiles()
      .subscribe( data => {
        console.log(data.results);
        let i = 0;
        for (const result of data.results) {
          if (i >= 6) {
            break;
          }
          const pelicula: Pelicula = {
            id: result.id,
            title: result.title,
            overview: result.overview,
            releaseDate: result.release_date,
            backdropPath: result.backdrop_path,
            posterPath: result.poster_path,
            popularity: result.popularity,
            voteAverage: result.vote_average
          };
          this.infantiles.push(pelicula);
          i++;
        }
        console.log(this.infantiles);
      });
  }

}
