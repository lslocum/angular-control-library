import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

import { getDefaultPassword, IPassword } from 'projects/controls/src/lib/interfaces/password-interface';

import { LibraryService } from '../library.service';
import { lowerCaseValidator, upperCaseValidator, numberValidator } from './password-validation';

@Component({
  selector: 'app-password',
  templateUrl: './password-demo.component.html',
})
export class PasswordDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  passwordProperties: IPassword;
  formGroup: FormGroup;
  formControlName = 'password';
  disabled = false;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      password: new FormControl(),
    });

    this.passwordProperties = getDefaultPassword({
      appearance: 'standard',
      id: this.formControlName,
      label: 'Password',
      name: this.formControlName,
    });
    this.setValidators();
  }

  disableControl(value: boolean): void {
    if (value) {
      this.formGroup.get(this.formControlName).disable();
    } else {
      this.formGroup.get(this.formControlName).enable();
    }

    this.disabled = value;
  }

  updatePasswordProperties(value: IPassword): void {
    this.passwordProperties = { ...value, passwordRequirements: { ...value.passwordRequirements } };
    this.setValidators();
  }

  private setValidators(): void {
    const validatorsToApply: ValidatorFn[] = [];

    if (this.passwordProperties.required) {
      validatorsToApply.push(Validators.required);
    }

    if (this.passwordProperties.passwordRequirements) {
      const { minlength, requireLowerCase, requireUpperCase, requireNumbers } =
        this.passwordProperties.passwordRequirements;

      if (minlength) {
        validatorsToApply.push(Validators.minLength(minlength));
      }

      if (requireLowerCase) {
        validatorsToApply.push(lowerCaseValidator());
      }

      if (requireUpperCase) {
        validatorsToApply.push(upperCaseValidator());
      }

      if (requireNumbers) {
        validatorsToApply.push(numberValidator());
      }
    }

    setTimeout(() => {
      this.formGroup.get(this.formControlName).setValidators(validatorsToApply);
      this.formGroup.get(this.formControlName).updateValueAndValidity();
    }, 0);
  }
}
