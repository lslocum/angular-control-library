import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { ICheckbox } from 'projects/controls/src/lib/interfaces/checkbox-interface';

@Component({
  selector: 'matti-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() checkboxProperties: ICheckbox;
  @Output() indeterminateChange = new EventEmitter<boolean>();

  disabled: boolean;
  labelPosition;
  value: boolean;

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

  writeValue(value: boolean): void {
    this.value = value;
  }

  onChange() {
    this.onChangeCallback(this.value);
  }

  onIndeterminateChange() {
    this.onChangeCallback(this.value);
    this.indeterminateChange.emit(this.value);
  }
}
