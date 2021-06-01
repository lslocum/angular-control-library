import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-textbox-demo',
  templateUrl: './textbox-demo.component.html',
})
export class TextboxDemoComponent implements OnInit {
  formGroup: FormGroup;
  formControlName = 'textbox';
  label = 'User Name';
  placeholder = 'Enter user name';
  minlength = '';
  maxlength = '';
  pattern = '[A-Za-z]+';
  required = false;
  disabled = false;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      textbox: new FormControl('', Validators.pattern(this.pattern)),
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

  updateMinLength(value: string) {
    this.minlength = value;
  }

  updateMaxLength(value: string) {
    this.maxlength = value;
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  updatePattern(value: string) {
    this.pattern = value;
  }
}
