import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Self,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ISelect } from 'projects/controls/src/lib/interfaces/select-interface';

@Component({
  selector: 'prime-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() selectProperties: ISelect;
  appearanceClass: string;
  disabled: boolean;
  value = '';

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectProperties) {
      if (changes.selectProperties.currentValue?.appearance) {
        this.appearanceClass = changes.selectProperties.currentValue.appearance === 'fill' ? 'p-input-filled' : '';
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
    console.log('value on change', this.value);
  }
}
