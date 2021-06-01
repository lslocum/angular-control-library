import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-demo',
  templateUrl: './time-demo.component.html'
})
export class TimeDemoComponent implements OnInit {
  formGroup: FormGroup;

  formControlName = 'time';
  label = 'Appt. Time';
  required = false;
  disabled = false;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      time: new FormControl('17:00'),
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
