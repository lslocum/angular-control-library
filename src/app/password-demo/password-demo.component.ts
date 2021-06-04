import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-password',
  templateUrl: './password-demo.component.html',
})
export class PasswordDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'password';
  label = 'Password';
  placeholder = 'Password';
  title = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';
  requireLowerCase = false;
  requireUpperCase = false;
  requireNumbers = false;
  minLengthError = false;
  minlength: string = '';
  maxlength: string = '';
  required = false;
  disabled = false;
  appearance: MatFormFieldAppearance;

  passwordRequirements = {
    minlength: this.minlength,
    maxlength: this.maxlength,
    shouldContainLowerCase: this.requireLowerCase,
    shouldContainUpperCase: this.requireUpperCase,
    shouldContainNumbers: this.requireNumbers,
  };

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        lib === 'Material' ? (this.appearance = 'standard') : undefined;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      password: new FormControl(),
    });
  }

  disableControl(value: boolean): void {
    if (value) {
      this.formGroup.get(this.formControlName).disable();
    } else {
      this.formGroup.get(this.formControlName).enable();
    }

    this.disabled = value;
  }

  toggleRequired(value: boolean) {
    if (!value) {
      this.formGroup.get(this.formControlName).clearValidators();
    } else {
      this.formGroup.get(this.formControlName).setValidators(Validators.required);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();

    this.required = value;
  }

  toggleRequireLowerCase(value: boolean) {
    this.passwordRequirements = {
      ...this.passwordRequirements,
      shouldContainLowerCase: value,
    };
    this.requireLowerCase = value;
  }

  toggleRequireUpperCase(value: boolean) {
    this.passwordRequirements = {
      ...this.passwordRequirements,
      shouldContainUpperCase: value,
    };
    this.requireUpperCase = value;
  }

  toggleRequireNumbers(value: boolean) {
    this.passwordRequirements = {
      ...this.passwordRequirements,
      shouldContainNumbers: value,
    };
    this.requireNumbers = value;
  }

  updateMinLength(value: string) {
    this.passwordRequirements = {
      ...this.passwordRequirements,
      minlength: value,
    };
  }

  updateMaxLength(value: string) {
    this.passwordRequirements = {
      ...this.passwordRequirements,
      maxlength: value,
    };
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  appearanceUpdated(value): void {
    this.appearance = value;
  }
}
