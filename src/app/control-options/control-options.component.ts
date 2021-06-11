import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { IButton } from 'projects/controls/src/lib/interfaces/button-interface';
import { ICheckbox } from 'projects/controls/src/lib/interfaces/checkbox-interface';
import { IDate } from 'projects/controls/src/lib/interfaces/date-interface';
import { IEmail } from 'projects/controls/src/lib/interfaces/email-interface';
import { INumber } from 'projects/controls/src/lib/interfaces/number-interface';
import { IPassword, IPasswordRequirements } from 'projects/controls/src/lib/interfaces/password-interface';
import { Position } from 'projects/controls/src/lib/interfaces/position';

@Component({
  selector: 'app-control-options',
  templateUrl: './control-options.component.html',
  styleUrls: ['./control-options.component.scss'],
})
export class ControlOptionsComponent implements OnInit {
  @Input() buttonProperties: IButton;
  @Input() checkboxProperties: ICheckbox;
  @Input() dateProperties: IDate;
  @Input() emailProperties: IEmail;
  @Input() numberProperties: INumber;
  @Input() passwordProperties: IPassword;
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
  /* Material Options */
  @Input() color?: ThemePalette;

  @Input() appearance?: MatFormFieldAppearance;
  @Input() labelPosition?: Position;
  @Input() direction?: 'vertical' | 'horizontal';
  @Input() disableOptionCentering?: boolean;

  @Output() buttonPropertiesUpdated = new EventEmitter<IButton>();
  @Output() checkboxPropertiesUpdated = new EventEmitter<ICheckbox>();
  @Output() datePropertiesUpdated = new EventEmitter<IDate>();
  @Output() emailPropertiesUpdated = new EventEmitter<IEmail>();
  @Output() numberPropertiesUpdated = new EventEmitter<INumber>();
  @Output() passwordPropertiesUpdated = new EventEmitter<IPassword>();
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
  /* Material Options */
  @Output() colorUpdated = new EventEmitter<ThemePalette>();
  @Output() appearanceUpdated = new EventEmitter<MatFormFieldAppearance>();
  @Output() labelPositionUpdated = new EventEmitter<'before' | 'after'>();
  @Output() directionUpdated = new EventEmitter<'vertical' | 'horizontal'>();
  @Output() disableOptionCenteringUpdated = new EventEmitter<boolean>();

  @Output() loadingUpdated = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.buttonProperties) {
      this.label = this.buttonProperties.label;
      this.color = this.buttonProperties.color;
    }

    console.log('password', this.passwordProperties);
  }

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

  updateColor(event) {
    console.log('color');
    this.colorUpdated.emit(event.target.value);
  }

  updateAppearance(event) {
    this.appearanceUpdated.emit(event.target.value);
  }

  updateLabelPosition(event) {
    this.labelPositionUpdated.emit(event.target.value);
  }

  updateDirection(event) {
    this.directionUpdated.emit(event.target.value);
  }

  updateDisableOptionCentering() {
    this.disableOptionCenteringUpdated.emit(!this.disableOptionCentering);
    this.disableOptionCentering = !this.disableOptionCentering;
  }

  updateButtonProperties(event: any, property: string): void {
    const buttonProps = {
      ...this.buttonProperties,
      [property]: this.getUpdatedValue(event, this.buttonProperties[property]),
    };

    this.buttonPropertiesUpdated.emit(buttonProps);
  }

  updateCheckboxProperties(event: any, property: string): void {
    const checkboxProps = {
      ...this.checkboxProperties,
      [property]: this.getUpdatedValue(event, this.checkboxProperties[property]),
    };

    this.checkboxPropertiesUpdated.emit(checkboxProps);
  }

  updateDateProperties(event: any, property: string): void {
    const dateProps = {
      ...this.dateProperties,
      [property]: this.getUpdatedValue(event, this.dateProperties[property]),
    };

    this.datePropertiesUpdated.emit(dateProps);
  }

  updateEmailProperties(event: any, property: string): void {
    const emailProps = {
      ...this.emailProperties,
      [property]: this.getUpdatedValue(event, this.emailProperties[property]),
    };

    this.emailPropertiesUpdated.emit(emailProps);
  }

  updateNumberProperties(event: any, property: string): void {
    const numberProps = {
      ...this.numberProperties,
      [property]: this.getUpdatedValue(event, this.numberProperties[property]),
    };

    this.numberPropertiesUpdated.emit(numberProps);
  }

  updatePasswordProperties(event: any, property: string): void {
    const changeIsPasswordRequirements = this.changeIsPasswordRequirements(property);
    const passwordProps: IPassword = changeIsPasswordRequirements
      ? {
          ...this.passwordProperties,
          passwordRequirements: {
            ...this.passwordProperties.passwordRequirements,
            [property]: this.getUpdatedValue(event, this.passwordProperties.passwordRequirements[property]),
          },
        }
      : {
          ...this.passwordProperties,
          [property]: this.getUpdatedValue(event, this.passwordProperties[property]),
        };

    this.passwordPropertiesUpdated.emit(passwordProps);
  }

  private getUpdatedValue(event: any, value: unknown): unknown {
    return typeof value === 'boolean' ? !value : event.target.value;
  }

  private changeIsPasswordRequirements(property: string): boolean {
    return (
      property === 'minlength' ||
      property === 'maxlength' ||
      property === 'requireLowerCase' ||
      property === 'requireUpperCase' ||
      property === 'requireNumbers' ||
      property === 'requireSpecialCharacters'
    );
  }
}
