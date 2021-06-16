import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { IButton } from 'projects/controls/src/lib/interfaces/button-interface';
import { ICheckbox } from 'projects/controls/src/lib/interfaces/checkbox-interface';
import { IDate } from 'projects/controls/src/lib/interfaces/date-interface';
import { IEmail } from 'projects/controls/src/lib/interfaces/email-interface';
import { INumber } from 'projects/controls/src/lib/interfaces/number-interface';
import { IPassword } from 'projects/controls/src/lib/interfaces/password-interface';
import { IPhone } from 'projects/controls/src/lib/interfaces/phone-interface';
import { IRadio } from 'projects/controls/src/lib/interfaces/radio-interface';
import { ISelect } from 'projects/controls/src/lib/interfaces/select-interface';
import { ITextarea } from 'projects/controls/src/lib/interfaces/textarea-interface';
import { ITextbox } from 'projects/controls/src/lib/interfaces/textbox-interface';
import { ITime } from 'projects/controls/src/lib/interfaces/time-interface';

@Component({
  selector: 'app-control-options',
  templateUrl: './control-options.component.html',
  styleUrls: ['./control-options.component.scss'],
})
export class ControlOptionsComponent {
  @Input() disabled: boolean;
  @Input() buttonProperties: IButton;
  @Input() checkboxProperties: ICheckbox;
  @Input() dateProperties: IDate;
  @Input() emailProperties: IEmail;
  @Input() numberProperties: INumber;
  @Input() passwordProperties: IPassword;
  @Input() phoneProperties: IPhone;
  @Input() radioProperties: IRadio;
  @Input() selectProperties: ISelect;
  @Input() textareaProperties: ITextarea;
  @Input() textboxProperties: ITextbox;
  @Input() timeProperties: ITime;

  @Output() buttonPropertiesUpdated = new EventEmitter<IButton>();
  @Output() checkboxPropertiesUpdated = new EventEmitter<ICheckbox>();
  @Output() datePropertiesUpdated = new EventEmitter<IDate>();
  @Output() disabledToggled = new EventEmitter<boolean>();
  @Output() emailPropertiesUpdated = new EventEmitter<IEmail>();
  @Output() numberPropertiesUpdated = new EventEmitter<INumber>();
  @Output() passwordPropertiesUpdated = new EventEmitter<IPassword>();
  @Output() phonePropertiesUpdated = new EventEmitter<IPhone>();
  @Output() radioPropertiesUpdated = new EventEmitter<IRadio>();
  @Output() selectPropertiesUpdated = new EventEmitter<ISelect>();
  @Output() textareaPropertiesUpdated = new EventEmitter<ITextarea>();
  @Output() textboxPropertiesUpdated = new EventEmitter<ITextbox>();
  @Output() timePropertiesUpdated = new EventEmitter<ITime>();

  disableControl(): void {
    this.disabled = !this.disabled;
    this.disabledToggled.emit(this.disabled);
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

  updatePhoneProperties(event: any, property: string): void {
    const phoneProps = {
      ...this.phoneProperties,
      [property]: this.getUpdatedValue(event, this.phoneProperties[property]),
    };

    this.phonePropertiesUpdated.emit(phoneProps);
  }

  updateRadioProperties(event: any, property: string): void {
    const radioProps = {
      ...this.radioProperties,
      [property]: this.getUpdatedValue(event, this.radioProperties[property]),
    };

    this.radioPropertiesUpdated.emit(radioProps);
  }

  updateSelectProperties(event: any, property: string): void {
    const selectProps = {
      ...this.selectProperties,
      [property]: this.getUpdatedValue(event, this.selectProperties[property]),
    };

    this.selectPropertiesUpdated.emit(selectProps);
  }

  updateTextareaProperties(event: any, property: string): void {
    const textareaProps = {
      ...this.textareaProperties,
      [property]: this.getUpdatedValue(event, this.textareaProperties[property]),
    };

    this.textareaPropertiesUpdated.emit(textareaProps);
  }

  updateTextboxProperties(event: any, property: string): void {
    const textboxProps = {
      ...this.textboxProperties,
      [property]: this.getUpdatedValue(event, this.textboxProperties[property]),
    };

    this.textboxPropertiesUpdated.emit(textboxProps);
  }

  updateTimeProperties(event: any, property: string): void {
    const timeProps = {
      ...this.timeProperties,
      [property]: this.getUpdatedValue(event, this.timeProperties[property]),
    };

    this.timePropertiesUpdated.emit(timeProps);
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
