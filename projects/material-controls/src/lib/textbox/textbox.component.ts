import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'matti-textbox',
  templateUrl: './textbox.component.html',
})
export class TextboxComponent implements ControlValueAccessor {
  @Input() appearance: MatFormFieldAppearance;
  @Input() id: string;
  @Input() label: string;
  @Input() minlength: number = 0;
  @Input() maxlength: number;
  @Input() name: string;
  @Input() pattern: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

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

  writeValue(value: string): void {
    this.value = value;
  }

  onChange() {
    this.onChangeCallback(this.value);
  }
}
