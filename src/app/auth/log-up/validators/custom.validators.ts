import { AbstractControl } from '@angular/forms';

export function gmailValidators(control: AbstractControl) {
    if(!control.value.includes('@gmail.com')){
      return { ggmail: true };
      }
      return null;
}