import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'matti-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() color: ThemePalette;
  @Input() disableRipple: boolean;
  @Input() id: string;
  @Input() indeterminate: boolean;
  @Input() label: string;
  @Input() labelPosition: 'before' | 'after';
  @Input() name: string;
  @Input() required: boolean;
  @Output() indeterminateChange = new EventEmitter<boolean>();

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

  onIndeterminateChange(){
    this.onChangeCallback(this.value);
    this.indeterminateChange.emit(this.value);
  }
}
