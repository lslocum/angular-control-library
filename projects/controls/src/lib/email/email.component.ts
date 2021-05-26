import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailComponent),
      multi: true,
    },
  ],
})
export class EmailComponent implements ControlValueAccessor, AfterViewInit {
  @Input() formControlName: string;
  @Input() isDisabled: boolean = false;
  @Input() placeholder: string;

  @Output() blur: EventEmitter<void> = new EventEmitter();
  @Output() click: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<void> = new EventEmitter();

  @ViewChild('email') email: ElementRef;

  ngClass: string = '';
  value = '';
  control;

  onChangeCallback = (e) => {};
  onTouchedCallback = () => {};

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    console.log('on init', this.isDisabled);
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
    if (isDisabled) {
      debugger;
    }
    this.renderer.setProperty(this.email.nativeElement, 'disabled', isDisabled);
  }

  writeValue(value: string): void {
    this.value = value ? value : '';
  }
}
