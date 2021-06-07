import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NgControl, Validator, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { lowerCaseValidator, numberValidator, upperCaseValidator } from './password-validation';

@Component({
  selector: 'matti-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent implements ControlValueAccessor, OnChanges {
  @Input() appearance: MatFormFieldAppearance;
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() passwordRequirements: {
    minlength: number;
    maxlength: number;
    shouldContainLowerCase: boolean;
    shouldContainUpperCase: boolean;
    shouldContainNumbers: boolean;
    shouldContainSpecialCharacters: boolean;
  };
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  @Output() change = new EventEmitter<string>();

  disabled: boolean = false;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public controlDir: NgControl) {
    this.controlDir && (this.controlDir.valueAccessor = this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.required || changes.passwordRequirements) {
      this.setValidators();
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onChange() {
    this.onChangeCallback(this.value);
    this.change.emit(this.value);
  }

  private setValidators(): void {
    const validatorsToApply: ValidatorFn[] = [];

    if (this.required) {
      validatorsToApply.push(Validators.required);
    }

    if (this.passwordRequirements) {
      const { minlength, shouldContainLowerCase, shouldContainUpperCase, shouldContainNumbers } =
        this.passwordRequirements;

      if (minlength) {
        validatorsToApply.push(Validators.minLength(minlength));
      }

      if (shouldContainLowerCase) {
        validatorsToApply.push(lowerCaseValidator());
      }

      if (shouldContainUpperCase) {
        validatorsToApply.push(upperCaseValidator());
      }

      if (shouldContainNumbers) {
        validatorsToApply.push(numberValidator());
      }
    }

    setTimeout(() => {
      this.controlDir.control.setValidators(validatorsToApply);
      this.controlDir.control.updateValueAndValidity();
    }, 0);
  }
}
