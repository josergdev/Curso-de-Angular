import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    value = value.toLowerCase();
    const nombres = value.split(' ');
    const salida: string[] = [];

    for (const nombre of nombres) {
      salida.push( nombre[0].toUpperCase() + nombre.substr(1) );
    }

    return salida.join(' ');
  }

}
