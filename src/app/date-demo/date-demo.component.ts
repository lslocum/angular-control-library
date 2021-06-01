import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-demo',
  templateUrl: './date-demo.component.html',
})
export class DateDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  formControlName = 'date';
  label = 'Birthday';
  placeholder = 'Enter date';
  date = new Date('10/27/2020');

  disabledControl = true;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      date: new FormControl(jsDateToInputDate(this.date)),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      date: new FormControl(''),
    });

    this.requiredFormGroup = new FormGroup({
      date: new FormControl('', Validators.required),
    });

    this.disabledFormGroup = new FormGroup({
      date: new FormControl({
        value: jsDateToInputDate(this.date),
        disabled: true,
      }),
    });
  }

  disableControl(): void {
    if (this.disabledControl) {
      this.disabledFormGroup.get('date').enable();
    } else {
      this.disabledFormGroup.get('date').disable();
    }

    this.disabledControl = !this.disabledControl;
  }
}

function jsDateToInputDate(date: Date): string {
  return date.toLocaleDateString('en-CA');
}
