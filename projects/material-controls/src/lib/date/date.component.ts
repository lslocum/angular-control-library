import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DateFilterFn, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'matti-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() appearance: MatFormFieldAppearance;
  @Input() required: boolean;
  @Input() color: ThemePalette;
  @Input('matDatepickerFilter') dateFilter?: DateFilterFn<Date>;
  @Input() max?: Date;
  @Input() min?: Date;

  @Output() dateChange: EventEmitter<MatDatepickerInputEvent<Date, unknown>>;
  @Output() dateInput: EventEmitter<MatDatepickerInputEvent<Date, unknown>>;

  disabled: boolean;
  value;
  errorMessages = new Map();

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  get showError(): boolean {
    let shouldShowErrors = false;

    if (this.control) {
      const { dirty, touched, invalid } = this.control;
      shouldShowErrors = invalid ? dirty || touched : false;
    }

    return shouldShowErrors;
  }

  get errors(): Array<string> {
    let errorsToShow = [];

    if (this.control) {
      const { errors } = this.control;
      errorsToShow = Object.keys(errors).map((key) =>
        this.errorMessages.has(key) ? this.errorMessages.get(key)() : <string>errors[key] || key
      );
    }

    return errorsToShow;
  }

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);

    this.errorMessages.set('required', () => `${this.label} is required.`);
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
