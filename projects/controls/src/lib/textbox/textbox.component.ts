import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() minlength = 0;
  @Input() maxlength;
  @Input() pattern;

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
    this.errorMessages.set(
      'pattern',
      () => `Invalid data. Please check requirements.`
    );
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
  }
}
