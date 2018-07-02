import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../intefaces/pelicula';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public peliculas: Pelicula[] = [];
  public query = '';

  constructor(private peliculasService: PeliculasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params.query) {
        this.query = params.query;
        this.searchPeliculas();
      }
    });
  }

  public searchPeliculas() {
    if (this.query === '') {
      return;
    }
    this.peliculasService.searchPeliculas(this.query)
      .subscribe( data => {
        this.peliculas = [];
        for (const result of data.results) {
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
          this.peliculas.push(pelicula);
        }
        console.log(this.peliculas);
      });
  }

  public updateRoute() {
    this.router.navigate(['/buscar', this.query]);
  }

}
