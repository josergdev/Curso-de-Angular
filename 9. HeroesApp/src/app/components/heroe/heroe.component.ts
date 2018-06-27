import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  nuevo = false;
  id = '';

  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                activatedRoute.params.subscribe( params => {
                  if (params.id === 'nuevo') {
                    this.nuevo = true;
                  } else {
                    this.id = params.id;
                    this.nuevo = false;
                    heroesService.getHeroe(this.id).subscribe(
                      heroe => this.heroe = heroe
                    );
                  }
                });
              }

  ngOnInit() {
  }

  guardar() {
    if (this.nuevo) {
      this.heroesService.nuevoHeroe(this.heroe).subscribe(data => {
        console.log(data);
        this.router.navigate(['/heroe', data.name]);
      });
    } else {
      this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe( data => {
        console.log(data);
      });
    }
  }

  doNuevo(form: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({casa: 'Marvel'});
  }

}
