import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDestacado]'
})
export class DestacadoDirective {

  constructor(private elemRef: ElementRef) {
    console.log('directiva llamada');
    elemRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input() color: string;

  @HostListener('mouseenter') hoverEnter() {
    console.log(this.color);
    this.elemRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') hoverLeave() {
    this.elemRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
