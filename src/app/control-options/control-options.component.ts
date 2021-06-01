import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control-options',
  templateUrl: './control-options.component.html',
  styleUrls: ['./control-options.component.scss'],
})
export class ControlOptionsComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() minlength: string;
  @Input() maxlength: string;
  @Input() requireLowerCase = false;
  @Input() requireUpperCase = false;
  @Input() requireNumbers = false;

  @Output() labelUpdated = new EventEmitter<string>();
  @Output() placeholderUpdated = new EventEmitter<string>();
  @Output() disabledToggled = new EventEmitter<boolean>();
  @Output() requiredToggled = new EventEmitter<boolean>();
  @Output() minlengthUpdated = new EventEmitter<string>();
  @Output() maxlengthUpdated = new EventEmitter<string>();
  @Output() lowerCaseToggled = new EventEmitter<boolean>();
  @Output() upperCaseToggled = new EventEmitter<boolean>();
  @Output() numberToggled = new EventEmitter<boolean>();

  disableControl(event): void {
    this.disabled = !this.disabled;
    this.disabledToggled.emit(this.disabled);
  }

  toggleRequired(event) {
    this.requiredToggled.emit(!this.required);
    this.required = !this.required;
  }

  toggleRequireLowerCase(event) {
    this.lowerCaseToggled.emit(!this.requireLowerCase);
    this.requireLowerCase = !this.requireLowerCase;
  }

  toggleRequireUpperCase(event) {
    this.upperCaseToggled.emit(!this.requireUpperCase);
    this.requireUpperCase = !this.requireUpperCase;
  }

  toggleRequireNumbers(event) {
    this.numberToggled.emit(!this.requireNumbers);
    this.requireNumbers = !this.requireNumbers;
  }

  updateMinLength(event) {
    this.minlengthUpdated.emit(event.target.value);
  }

  updateMaxLength(event) {
    this.maxlengthUpdated.emit(event.target.value);
  }

  updateLabel(event) {
    this.labelUpdated.emit(event.target.value);
  }

  updatePlaceholder(event) {
    this.placeholderUpdated.emit(event.target.value);
  }
}
