import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-number-demo',
  templateUrl: './number-demo.component.html',
})
export class NumberDemoComponent implements OnInit {
  formGroup: FormGroup;
  formControlName = 'number';
  label = 'Age';
  placeholder = 'Your age';
  disabled = false;
  required = false;
  min = 13;
  max = 99;
  step = 2;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      number: new FormControl(22, [Validators.min(this.min), Validators.max(this.max)]),
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
      this.formGroup.get(this.formControlName).setValidators(Validators.required);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();

    this.required = value;
  }

  updateMin(value: string) {
    this.min = +value;
  }

  updateMax(value: string) {
    this.max = +value;
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  updateStep(value: string) {
    this.step = +value;
  }
}
