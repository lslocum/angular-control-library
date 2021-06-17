import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  disableControl(event): void {
    this.disabled = event.value;
    this.disabledToggled.emit(this.disabled);
  }

  updateButtonProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const buttonProps = {
      ...this.buttonProperties,
      [prop]: this.getUpdatedValue(event, this.buttonProperties[prop]),
    };

    this.buttonPropertiesUpdated.emit(buttonProps);
  }

  updateCheckboxProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const checkboxProps = {
      ...this.checkboxProperties,
      [prop]: this.getUpdatedValue(event, this.checkboxProperties[prop]),
    };

    this.checkboxPropertiesUpdated.emit(checkboxProps);
  }

  updateDateProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const dateProps = {
      ...this.dateProperties,
      [prop]: this.getUpdatedValue(event, this.dateProperties[prop]),
    };

    this.datePropertiesUpdated.emit(dateProps);
  }

  updateEmailProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const emailProps = {
      ...this.emailProperties,
      [prop]: this.getUpdatedValue(event, this.emailProperties[prop]),
    };

    this.emailPropertiesUpdated.emit(emailProps);
  }

  updateNumberProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const numberProps = {
      ...this.numberProperties,
      [prop]: this.getUpdatedValue(event, this.numberProperties[prop]),
    };

    this.numberPropertiesUpdated.emit(numberProps);
  }

  updatePasswordProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const changeIsPasswordRequirements = this.changeIsPasswordRequirements(prop);
    const passwordProps: IPassword = changeIsPasswordRequirements
      ? {
          ...this.passwordProperties,
          passwordRequirements: {
            ...this.passwordProperties.passwordRequirements,
            [prop]: this.getUpdatedValue(event, this.passwordProperties.passwordRequirements[prop]),
          },
        }
      : {
          ...this.passwordProperties,
          [prop]: this.getUpdatedValue(event, this.passwordProperties[prop]),
        };

    this.passwordPropertiesUpdated.emit(passwordProps);
  }

  updatePhoneProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const phoneProps = {
      ...this.phoneProperties,
      [prop]: this.getUpdatedValue(event, this.phoneProperties[prop]),
    };

    this.phonePropertiesUpdated.emit(phoneProps);
  }

  updateRadioProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const radioProps = {
      ...this.radioProperties,
      [prop]: this.getUpdatedValue(event, this.radioProperties[prop]),
    };

    this.radioPropertiesUpdated.emit(radioProps);
  }

  updateSelectProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const selectProps = {
      ...this.selectProperties,
      [prop]: this.getUpdatedValue(event, this.selectProperties[prop]),
    };

    this.selectPropertiesUpdated.emit(selectProps);
  }

  updateTextareaProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const textareaProps = {
      ...this.textareaProperties,
      [prop]: this.getUpdatedValue(event, this.textareaProperties[prop]),
    };

    this.textareaPropertiesUpdated.emit(textareaProps);
  }

  updateTextboxProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const textboxProps = {
      ...this.textboxProperties,
      [prop]: this.getUpdatedValue(event, this.textboxProperties[prop]),
    };

    this.textboxPropertiesUpdated.emit(textboxProps);
  }

  updateTimeProperties(event: any, property: string): void {
    const prop: string = event['property'] ? event.property : property;
    const timeProps = {
      ...this.timeProperties,
      [prop]: this.getUpdatedValue(event, this.timeProperties[prop]),
    };

    this.timePropertiesUpdated.emit(timeProps);
  }

  private getUpdatedValue(event: any, value: unknown): unknown {
    return typeof value === 'boolean' ? !value : event['value'] ? event.value : event.target.value;
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
