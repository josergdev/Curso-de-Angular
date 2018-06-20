import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Jose';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    calle: {
      calle: 'Falsa',
      numero: 123
    }
  };
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('LLegaron los datos!'), 3500);
  });
  hoy = new Date();
  nombre2 = 'joSé rodriGUEz GarcÍa';
  video = 'Rht7rBHuXW8';
  mostrada = false;
}
