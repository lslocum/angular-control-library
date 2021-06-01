import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-demo',
  templateUrl: './date-demo.component.html',
})
export class DateDemoComponent implements OnInit {
  formGroup: FormGroup;
  formControlName = 'date';
  label = 'Birthday';
  required = false;
  disabled = false;

  date = new Date('10/27/2020');

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl(jsDateToInputDate(this.date)),
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
      this.formGroup.get(this.formControlName).clearValidators();
    } else {
      this.formGroup
        .get(this.formControlName)
        .setValidators(Validators.required);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();

    this.required = value;
  }

  updateLabel(value: string) {
    this.label = value;
  }
}

function jsDateToInputDate(date: Date): string {
  return date.toLocaleDateString('en-CA');
}
