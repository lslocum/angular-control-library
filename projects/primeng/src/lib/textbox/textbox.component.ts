import { Component, Input, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { ITextbox } from 'projects/controls/src/lib/interfaces/textbox-interface';

@Component({
  selector: 'prime-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent implements ControlValueAccessor, OnChanges {
  @Input() textboxProperties: ITextbox;
  appearanceClass: string;
  disabled: boolean;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textboxProperties) {
      if (changes.textboxProperties.currentValue?.appearance) {
        this.appearanceClass = changes.textboxProperties.currentValue.appearance === 'fill' ? 'p-input-filled' : '';
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
  }
}
