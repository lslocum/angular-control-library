import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-demo',
  templateUrl: './phone-demo.component.html',
})
export class PhoneDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  placeholder = '555-555-5555';
  label = 'Cell Phone';
  formControlName = 'phone';

  disabledControl = true;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      phone: new FormControl(
        '6204316000',
        Validators.pattern(validPhoneNumberPattern)
      ),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      phone: new FormControl('', Validators.pattern(validPhoneNumberPattern)),
    });

    this.requiredFormGroup = new FormGroup({
      phone: new FormControl('', Validators.required),
    });

    this.disabledFormGroup = new FormGroup({
      phone: new FormControl(
        { value: '911', disabled: true },
        Validators.pattern(validPhoneNumberPattern)
      ),
    });
  }

  disableControl(): void {
    if (this.disabledControl) {
      this.disabledFormGroup.get('phone').enable();
    } else {
      this.disabledFormGroup.get('phone').disable();
    }

    this.disabledControl = !this.disabledControl;
  }
}

const validPhoneNumberPattern = '[0-9]{3}[0-9]{3}[0-9]{4}';
