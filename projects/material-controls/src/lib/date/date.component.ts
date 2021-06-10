import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DateFilterFn, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { IDate } from 'projects/controls/src/lib/interfaces/date-interface';

@Component({
  selector: 'matti-date',
  templateUrl: './date.component.html',
})
export class DateComponent implements ControlValueAccessor {
  @Input() dateProperties: IDate;
  @Output() dateChange: EventEmitter<MatDatepickerInputEvent<Date, unknown>>;
  @Output() dateInput: EventEmitter<MatDatepickerInputEvent<Date, unknown>>;

  disabled: boolean;
  value;

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
