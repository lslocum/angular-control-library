import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ICheckbox } from 'projects/controls/src/lib/interfaces/checkbox-interface';

@Component({
  selector: 'prime-checkbox',
  templateUrl: './checkbox.component.html',
  styles: ['label {margin: 0 0.5rem; }']
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() checkboxProperties: ICheckbox;

  disabled: boolean;
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
}
