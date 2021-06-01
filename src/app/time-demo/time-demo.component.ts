import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-demo',
  templateUrl: './time-demo.component.html'
})
export class TimeDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  formControlName = 'time';
  label = 'Appt. Time';

  disabledControl = true;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      time: new FormControl('17:00'),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      time: new FormControl(''),
    });

    this.requiredFormGroup = new FormGroup({
      time: new FormControl('06:00', Validators.required),
    });

    this.disabledFormGroup = new FormGroup({
      time: new FormControl({
        value: '10:27',
        disabled: this.disabledControl,
      }),
    });
  }

  disableControl(): void {
    if (this.disabledControl) {
      this.disabledFormGroup.get('time').enable();
    } else {
      this.disabledFormGroup.get('time').disable();
    }

    this.disabledControl = !this.disabledControl;
  }
}
