import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneComponent),
      multi: true,
    },
  ],
})
export class PhoneComponent implements ControlValueAccessor {
  @Input() controlName!: string;
  @Input() isDisabled: boolean = false;
  @Input() placeholder: string;

  @Output() blur: EventEmitter<void> = new EventEmitter();
  @Output() click: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<void> = new EventEmitter();

  ngClass: string = '';
  value = '';

  onChangeCallback = (e) => {};
  onTouchedCallback = () => {};

  ngOnInit(): void {
    this.setDisabledState(this.isDisabled);
  }

  handleOnBlur(): void {
    this.onTouchedCallback();
    this.blur.emit();
  }

  handleOnChange($event: any): void {
    const value = $event.currentTarget.value;
    this.writeValue(value);

    this.onChangeCallback(value);
    this.change.emit(value);
  }

  handleOnClick($event: any): void {
    this.click.emit($event);
  }

  handleOnFocus(): void {
    this.focus.emit();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: string): void {
    const formattedValue = formatPhoneNumber(value);
    this.value = formattedValue ? formattedValue : null;
    console.log('this.value', this.value);
  }
}

function formatPhoneNumber(value: string): string {
  // remove all mask characters (keep only numeric)
  let newValue = value.replace(/\D/g, '');
  console.log('stripped number "', newValue, '"');

  if (newValue.length == 0) {
    newValue = '';
  }
  else if (newValue.length <= 3) {
    newValue = newValue.replace(/^(\d{0,3})/, '$1');
  } else if (newValue.length <= 6) {
    newValue = newValue.replace(/^(\d{0,3})(\d{0,3})/, '$1-$2');
  } else {
    newValue = newValue.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1-$2-$3');
  }

  return newValue;
}
