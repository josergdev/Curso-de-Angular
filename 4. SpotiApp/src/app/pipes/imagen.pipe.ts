import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) {
      return 'assets/img/noimage.png';
    }

    return (value.length > 0) ? value[1].url : 'assets/img/noimage.png';
  }

}
