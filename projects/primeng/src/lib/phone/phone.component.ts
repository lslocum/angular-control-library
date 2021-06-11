import { Component, Input, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { IPhone } from 'projects/controls/src/lib/interfaces/phone-interface';

@Component({
  selector: 'prime-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements ControlValueAccessor {
  @Input() phoneProperties: IPhone;
  appearanceClass: string;
  disabled: boolean = false;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.phoneProperties) {
      if (changes.phoneProperties.currentValue?.appearance) {
        this.appearanceClass = changes.phoneProperties.currentValue.appearance === 'fill' ? 'p-input-filled' : '';
      }
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
