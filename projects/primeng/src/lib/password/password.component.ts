import { Component, EventEmitter, Input, Optional, Output, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { IPassword } from 'projects/controls/src/lib/interfaces/password-interface';

@Component({
  selector: 'prime-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements ControlValueAccessor {
  @Input() passwordProperties: IPassword;
  @Output() change = new EventEmitter<string>();
  appearanceClass: string;
  disabled: boolean = false;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.passwordProperties) {
      if (changes.passwordProperties.currentValue?.appearance) {
        this.appearanceClass = changes.passwordProperties.currentValue.appearance === 'fill' ? 'p-input-filled' : '';
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
    this.change.emit(this.value);
  }
}
