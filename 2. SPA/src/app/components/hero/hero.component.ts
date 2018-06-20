import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

  getCasa(): string {
    let imgUrl = 'assets/img/marvel.png';
    if (this.heroe.casa === 'DC') {
      imgUrl = 'assets/img/dc.png';
    }
    return imgUrl;
  }

}
