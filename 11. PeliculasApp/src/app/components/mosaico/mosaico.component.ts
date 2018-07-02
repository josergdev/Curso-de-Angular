import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../intefaces/pelicula';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent implements OnInit {

  @Input() public peliculas: Pelicula[] = [];

  constructor() { }

  ngOnInit() {
  }

}
