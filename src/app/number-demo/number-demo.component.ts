import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-number-demo',
  templateUrl: './number-demo.component.html',
})
export class NumberDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  formControlName = 'number';
  label = 'Age';
  placeholder = 'Your age';
  min = 13;
  max = 99;
  step = 2;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      number: new FormControl(22, [Validators.min(this.min), Validators.max(this.max)])
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      number: new FormControl(),
    });

    this.requiredFormGroup = new FormGroup({
      number: new FormControl('', Validators.required),
    });

    this.disabledFormGroup = new FormGroup({
      number: new FormControl({ value: '35', disabled: true }),
    });
  }
}
