import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function lowerCaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let validator = null;

    if (control.value) {
      validator = /[a-z]+/.test(control.value) ? null : { lowerCase: { value: control.value } };
    }
    return validator;
  };
}

export function upperCaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let validator = null;

    if (control.value) {
      validator = /[A-Z]+/.test(control.value) ? null : { upperCase: { value: control.value } };
    }
    return validator;
  };
}

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let validator = null;

    if (control.value) {
      validator = /[0-9]+/.test(control.value) ? null : { number: { value: control.value } };
    }
    return validator;
  };
}
