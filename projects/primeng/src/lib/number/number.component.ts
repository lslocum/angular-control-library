import { Component, Input, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { INumber } from 'projects/controls/src/lib/interfaces/number-interface';

@Component({
  selector: 'prime-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements ControlValueAccessor {
  @Input() numberProperties: INumber;
  appearanceClass: string;
  disabled: boolean = false;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.numberProperties.currentValue.appearance) {
      this.appearanceClass = changes.numberProperties.currentValue.appearance === 'fill' ? 'p-input-filled' : '';
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
