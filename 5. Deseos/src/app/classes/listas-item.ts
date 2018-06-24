export class ListaItem {
  nombre: string;
  completado: boolean;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.completado = false;
  }
}
