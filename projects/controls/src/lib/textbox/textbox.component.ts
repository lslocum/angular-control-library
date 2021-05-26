import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true,
    },
  ],
})
export class TextboxComponent implements ControlValueAccessor {
  @Input() isDisabled: boolean = false;
  @Input() placeholder: string;

  @Output() blur: EventEmitter<void> = new EventEmitter();
  @Output() click: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<void> = new EventEmitter();

  ngClass: string = "";
  value = "";

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
    this.value = value ? value : "";
  }
}
