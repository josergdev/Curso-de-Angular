import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public usuario: Usuario = {
    nombre: 'José',
    apellidos: 'Rodríguez',
    email: 'jose@mail.com'
  };

  constructor() { }

  ngOnInit() {
  }

  doSubmit(form: any) {
    console.log(form);
    console.log(form.value);
    console.log(this.usuario);
  }

}

export class Usuario {
  nombre: string;
  apellidos: string;
  email: string;
}
