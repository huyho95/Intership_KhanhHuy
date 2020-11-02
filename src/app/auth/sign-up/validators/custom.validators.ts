import { AbstractControl } from '@angular/forms';

export function gmailValidators(control: AbstractControl) {
    if(control.value.includes('@gmail.com')){
        return null;
      }
      return { gmail: true }
}