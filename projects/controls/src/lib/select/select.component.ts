import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ISelect } from '../interfaces/select-interface';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() selectProperties: ISelect;

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
