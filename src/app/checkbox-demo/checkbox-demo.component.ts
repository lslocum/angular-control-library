import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
})
export class CheckboxDemoComponent implements OnInit {
  formGroup: FormGroup;
  formControlName = 'checkbox';
  label = 'I Agree';
  disabled = false;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      checkbox: new FormControl(true),
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

  updateLabel(value: string) {
    this.label = value;
  }
}
