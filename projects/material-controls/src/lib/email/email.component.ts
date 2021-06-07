import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'matti-email',
  templateUrl: './email.component.html',
})
export class EmailComponent implements ControlValueAccessor {
  @Input() appearance: MatFormFieldAppearance;
  @Input() id: string;
  @Input() label: string;
  @Input() minlength?: number = 7;
  @Input() maxlength?: number;
  @Input() name: string;
  @Input() placeholder: string = '';
  @Input() required: boolean;

  disabled: boolean;
  value: string;

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
    this.onChangeCallback(this.value);
  }

  getErrorMessage() {
    let errorMessage = '';

    if (this.control.hasError('required')) {
      errorMessage = `${this.label} required.`;
    }

    if (this.control.hasError('email')) {
      errorMessage = 'Not a valid email.';
    }

    if (this.control.hasError('minlength')) {
      errorMessage = `An email must be at least ${this.minlength} characters.`;
    }

    return errorMessage;
  }
}
