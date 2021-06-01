import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control-options',
  templateUrl: './control-options.component.html',
  styleUrls: ['./control-options.component.scss'],
})
export class ControlOptionsComponent {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() required?: boolean;
  @Input() disabled?: boolean;
  @Input() minlength?: string;
  @Input() maxlength?: string;
  @Input() pattern?: string;
  @Input() requireLowerCase?: boolean;
  @Input() requireUpperCase?: boolean;
  @Input() requireNumbers?: boolean;
  @Input() cols?: number;
  @Input() rows?: number;
  @Input() wrap?: 'soft' | 'hard';
  @Input() step?: number;

  @Output() labelUpdated = new EventEmitter<string>();
  @Output() placeholderUpdated = new EventEmitter<string>();
  @Output() disabledToggled = new EventEmitter<boolean>();
  @Output() requiredToggled = new EventEmitter<boolean>();
  @Output() minlengthUpdated = new EventEmitter<string>();
  @Output() maxlengthUpdated = new EventEmitter<string>();
  @Output() patternUpdated = new EventEmitter<string>();
  @Output() lowerCaseToggled = new EventEmitter<boolean>();
  @Output() upperCaseToggled = new EventEmitter<boolean>();
  @Output() numberToggled = new EventEmitter<boolean>();
  @Output() colsUpdated = new EventEmitter<number>();
  @Output() rowsUpdated = new EventEmitter<number>();
  @Output() wrapUpdated = new EventEmitter<string>();
  @Output() stepUpdated = new EventEmitter<number>();

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

  updatePattern(event) {
    this.patternUpdated.emit(event.target.value);
  }

  updateCols(event) {
    this.colsUpdated.emit(event.target.value);
  }

  updateRows(event) {
    this.rowsUpdated.emit(event.target.value);
  }

  updateWrap(event) {
    this.wrapUpdated.emit(event.target.value);
  }

  updateStep(event) {
    this.stepUpdated.emit(event.target.value);
  }
}
