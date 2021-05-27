import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
})
export class CheckboxDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  disabledFormGroup: FormGroup;

  formControlName = 'checkbox';
  label = 'I Agree';

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      checkbox: new FormControl(true),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      checkbox: new FormControl(false),
    });

    this.disabledFormGroup = new FormGroup({
      checkbox: new FormControl({ value: true, disabled: true }),
    });
  }
}
