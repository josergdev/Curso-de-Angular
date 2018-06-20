import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'

})
export class BodyComponent {

  mostrar = false;

  frase: any = {
    mensaje: 'Un gran poder conlleva una gran responsabilidad.',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['SpiderMan', 'Venom', 'Dr. Octopus'];

}
