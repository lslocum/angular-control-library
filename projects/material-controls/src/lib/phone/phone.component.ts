import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { IPhone } from 'projects/controls/src/lib/interfaces/phone-interface';
import { stripPhoneNumberFormatting, formatPhoneNumber } from './format-phone-number';

@Component({
  selector: 'matti-phone',
  templateUrl: './phone.component.html',
})
export class PhoneComponent implements ControlValueAccessor {
  @Input() phoneProperties: IPhone;

  disabled: boolean = false;
  value = '';

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

  onChange() {
    this.writeValue(this.value);
    this.onChangeCallback(stripPhoneNumberFormatting(this.value));
  }

  writeValue(value: string): void {
    const formattedValue = formatPhoneNumber(value);
    this.value = formattedValue ? formattedValue : null;
  }
}
