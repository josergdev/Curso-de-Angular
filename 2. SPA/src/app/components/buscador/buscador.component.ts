import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[];
  cadena: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.cadena = params['cadena'];
      this.heroes = this.heroesService.buscarHeroe( params['cadena'] );
      console.log(this.heroes);
    });
  }

}
