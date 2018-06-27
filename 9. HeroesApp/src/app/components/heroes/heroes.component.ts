import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe, HeroeId } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: HeroeId[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe(data => {
      console.log(data);
      for (const id in data) {
        if (data.hasOwnProperty(id)) {
          const heroe: Heroe = data[id];
          const heroeId: HeroeId = {id, heroe};
          this.heroes.push(heroeId);
        }
      }
      console.log(this.heroes);
    });
  }

  borrarHeroe(heroeId: HeroeId) {
    this.heroesService.borrarHeroe(heroeId.id).subscribe(data => {
      console.log(data);
      this.heroes.splice(this.heroes.indexOf(heroeId), 1);
    });
  }

}
