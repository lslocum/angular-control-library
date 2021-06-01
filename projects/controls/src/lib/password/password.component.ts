import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import {
  containsLowerCase,
  containsUpperCase,
  containsNumber,
} from './password-validation';

@Component({
  selector: 'lib-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() passwordRequirements: {
    minlength: number;
    maxlength: number;
    shouldContainLowerCase: boolean;
    shouldContainUpperCase: boolean;
    shouldContainNumbers: boolean;
    shouldContainSpecialCharacters: boolean;
  };

  @Output() change = new EventEmitter<string>();

  disabled: boolean = false;
  value = '';
  errorMessages = new Map();

  lowerCaseError = true;
  upperCaseError = true;
  numberError = true;
  minLengthError = true;
  maxLengthError = true;

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  get showError(): boolean {
    let shouldShowErrors = false;

    if (this.control) {
      const { dirty, touched, invalid } = this.control;

      if (dirty || touched) {
        if (
          invalid ||
          (this.passwordRequirements.shouldContainLowerCase &&
            this.lowerCaseError) ||
          (this.passwordRequirements.shouldContainUpperCase &&
            this.upperCaseError) ||
          (this.passwordRequirements.shouldContainNumbers &&
            this.numberError) ||
          (this.passwordRequirements.minlength && this.minLengthError) ||
          (this.passwordRequirements.maxlength && this.maxLengthError)
        ) {
          shouldShowErrors = true;
        }
      }
    }

    return shouldShowErrors;
  }

  get errors(): Array<string> {
    let errorsToShow = [];

    if (this.control) {
      const { errors } = this.control;
      errorsToShow = Object.keys(errors).map((key) =>
        this.errorMessages.has(key)
          ? this.errorMessages.get(key)()
          : <string>errors[key] || key
      );
    }

    return errorsToShow;
  }

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
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
    this.validatePassword();
    this.onChangeCallback(this.value);
    this.change.emit(this.value);
  }

  validatePassword(): void {
    this.lowerCaseError = !containsLowerCase(this.value);
    this.upperCaseError = !containsUpperCase(this.value);
    this.numberError = !containsNumber(this.value);
    this.minLengthError =
      this.value.length < this.passwordRequirements.minlength;
    this.maxLengthError =
      this.value.length > this.passwordRequirements.maxlength;
  }
}
