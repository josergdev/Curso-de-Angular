import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../intefaces/pelicula';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: Pelicula;

  constructor(private peliculasService: PeliculasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getPelicula();
  }

  private getPelicula() {
    this.peliculasService.getPelicula(this.route.snapshot.params['id'])
      .subscribe( result => {
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
        this.pelicula = pelicula;
      });
  }

  public goBack() {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.search) {
        this.router.navigate(['/buscar', queryParams.search]);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

}
