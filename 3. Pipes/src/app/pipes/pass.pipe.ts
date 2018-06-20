import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, mostrada: boolean = false): string {
    let salida = value;
    if (!mostrada) {
      salida = '';
      for (let i = 0; i < value.length; i++) {
        salida += '*';
      }
    }

    return salida;
  }

}
