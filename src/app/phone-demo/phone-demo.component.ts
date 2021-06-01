import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-demo',
  templateUrl: './phone-demo.component.html',
})
export class PhoneDemoComponent implements OnInit {
  formGroup: FormGroup;
  formControlName = 'phone';
  label = 'Cell Phone';
  placeholder = '555-555-5555';
  pattern = validPhoneNumberPattern;
  required = false;
  disabled = false;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      phone: new FormControl(
        '6204316000',
        Validators.pattern(validPhoneNumberPattern)
      ),
    });
  }

  disableControl(value: boolean): void {
    if (value) {
      this.formGroup.get(this.formControlName).disable();
    } else {
      this.formGroup.get(this.formControlName).enable();
    }

    this.disabled = value;
  }

  toggleRequired(value: boolean) {
    if (!value) {
      this.formGroup.get(this.formControlName).setValidators(Validators.pattern(validPhoneNumberPattern));
    } else {
      this.formGroup
        .get(this.formControlName)
        .setValidators([Validators.pattern(validPhoneNumberPattern), Validators.required]);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();

    this.required = value;
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }
}

const validPhoneNumberPattern = '[0-9]{3}[0-9]{3}[0-9]{4}';
