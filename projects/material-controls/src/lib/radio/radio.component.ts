import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'matti-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() options: any[];
  @Input() nameProperty: string;
  @Input() valueProperty: string;
  @Input() color: ThemePalette;
  @Input() labelPosition: 'before' | 'after';
  @Input() direction: 'vertical' | 'horizontal';

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
