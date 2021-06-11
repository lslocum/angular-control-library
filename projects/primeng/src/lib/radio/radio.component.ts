import { Component, Input, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { IRadio } from 'projects/controls/src/lib/interfaces/radio-interface';

@Component({
  selector: 'prime-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements ControlValueAccessor {
  @Input() radioProperties: IRadio;
  appearanceClass: string;
  disabled: boolean = false;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.radioProperties) {
      if (changes.radioProperties.currentValue?.appearance) {
        this.appearanceClass = changes.radioProperties.currentValue.appearance === 'fill' ? 'p-input-filled' : '';
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

  writeValue(value: string): void {
    this.value = value;
  }

  onChange() {
    this.onChangeCallback(this.value);
  }
}
