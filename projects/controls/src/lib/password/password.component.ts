import {
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { IPassword } from '../interfaces/password-interface';

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
  @Input() passwordProperties: IPassword;
  @Output() change = new EventEmitter<string>();

  disabled: boolean = false;
  value = '';

  lowerCaseError = true;
  upperCaseError = true;
  numberError = true;
  minLengthError = true;
  maxLengthError = true;

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

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
      this.value.length < this.passwordProperties.passwordRequirements.minlength;
    this.maxLengthError =
      this.value.length > this.passwordProperties.passwordRequirements.maxlength;
  }
}
