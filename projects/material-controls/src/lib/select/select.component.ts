import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'matti-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements ControlValueAccessor {
  @Input() appearance: MatFormFieldAppearance;
  @Input() errorStateMatcher: ErrorStateMatcher;
  @Input() disableOptionCentering: boolean;
  @Input() disableRipple: boolean;
  @Input() id: string;
  @Input() label: string;
  @Input() name: string;
  @Input() nameProperty: string;
  @Input() multiple: boolean;
  @Input() options: any[];
  @Input() panelClass: string | string[] | Set<string> | { [key: string]: any };
  @Input() placeholder: string
  @Input() required: boolean;
  @Input() valueProperty: string;

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
