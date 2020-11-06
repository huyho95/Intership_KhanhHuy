import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorNumber]'
})
export class ColorNumberDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
    console.log(el)
   }

}
