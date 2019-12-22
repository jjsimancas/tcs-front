import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {
  constructor(private elm: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event) {
    const initialValue = this.elm.nativeElement.value;

    this.elm.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if ( initialValue !== this.elm.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
