import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'matti-textarea',
  templateUrl: './textarea.component.html',
  styles: [
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() appearance: MatFormFieldAppearance;
  @Input() cols: number;
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() maxlength: number;
  @Input() placeholder: string = '';
  @Input() required: boolean;
  @Input() rows: number;
  @Input() wrap: 'hard' | 'soft';

  disabled: boolean;
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
