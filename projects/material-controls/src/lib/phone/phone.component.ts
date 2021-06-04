import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'matti-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() required: boolean;
  @Input() appearance: MatFormFieldAppearance;

  disabled: boolean = false;
  minlength: number = 10;
  maxlength: number = 12;
  pattern: string = '[0-9]{3}[0-9]{3}[0-9]{4}';
  value = '';
  errorMessages = new Map();

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  get showError(): boolean {
    let shouldShowErrors = false;

    if (this.control) {
      const { dirty, touched, invalid } = this.control;
      shouldShowErrors = invalid ? dirty || touched : false;
    }

    return shouldShowErrors;
  }

  get errors(): Array<string> {
    let errorsToShow = [];

    if (this.control) {
      const { errors } = this.control;
      errorsToShow = Object.keys(errors).map((key) =>
        this.errorMessages.has(key) ? this.errorMessages.get(key)() : <string>errors[key] || key
      );
    }

    return errorsToShow;
  }

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);

    this.errorMessages.set('required', () => `${this.label} is required.`);
    this.errorMessages.set('pattern', () => `Invalid phone number.`);
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

  onChange() {
    this.writeValue(this.value);
    this.onChangeCallback(stripPhoneNumberFormatting(this.value));
  }

  writeValue(value: string): void {
    const formattedValue = formatPhoneNumber(value);
    this.value = formattedValue ? formattedValue : null;
  }
}

function stripPhoneNumberFormatting(value: string): string {
  let unformattedPhoneNumber = value;
  if (value) {
    // remove all mask characters (keep only numeric)
    unformattedPhoneNumber = value.replace(/\D/g, '');
  }

  return unformattedPhoneNumber;
}
function formatPhoneNumber(value: string): string {
  let unformattedNumber = stripPhoneNumberFormatting(value);

  if (unformattedNumber) {
    if (unformattedNumber?.length == 0) {
      unformattedNumber = '';
    } else if (unformattedNumber.length <= 3) {
      unformattedNumber = unformattedNumber.replace(/^(\d{0,3})/, '$1');
    } else if (unformattedNumber.length <= 6) {
      unformattedNumber = unformattedNumber.replace(/^(\d{0,3})(\d{0,3})/, '$1-$2');
    } else {
      unformattedNumber = unformattedNumber.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1-$2-$3');
    }
  }

  return unformattedNumber;
}
