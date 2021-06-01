import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() minlength: number = 10;
  @Input() maxlength: number = 12;
  @Input() pattern: string = '[0-9]{3}[0-9]{3}[0-9]{4}';

  disabled: boolean = false;
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
        this.errorMessages.has(key)
          ? this.errorMessages.get(key)()
          : <string>errors[key] || key
      );
    }

    return errorsToShow;
  }

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);

    this.errorMessages.set('required', () => `${this.label} is required.`);
    this.errorMessages.set(
      'minlength',
      () => `Please enter at least ${this.minlength} characters.`
    );
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
    this.onChangeCallback(this.value.replace(/\D/g, ''));
  }

  writeValue(value: string): void {
    const formattedValue = formatPhoneNumber(value);
    this.value = formattedValue ? formattedValue : null;
  }
}

function formatPhoneNumber(value: string): string {
  // remove all mask characters (keep only numeric)
  let newValue = value.replace(/\D/g, '');

  if (newValue.length == 0) {
    newValue = '';
  } else if (newValue.length <= 3) {
    newValue = newValue.replace(/^(\d{0,3})/, '$1');
  } else if (newValue.length <= 6) {
    newValue = newValue.replace(/^(\d{0,3})(\d{0,3})/, '$1-$2');
  } else {
    newValue = newValue.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1-$2-$3');
  }

  return newValue;
}
