import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  alert = 'alert-danger';

  propiedades: Object = {
    danger: true
  };

  loading = false;

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);
  }

}
