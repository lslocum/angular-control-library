import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { IPassword } from 'projects/controls/src/lib/interfaces/password-interface';

@Component({
  selector: 'matti-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent implements ControlValueAccessor {
  @Input() passwordProperties: IPassword;
  @Output() change = new EventEmitter<string>();

  disabled: boolean = false;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public controlDir: NgControl) {
    this.controlDir && (this.controlDir.valueAccessor = this);
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
    this.change.emit(this.value);
  }
}
