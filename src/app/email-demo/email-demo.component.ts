import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-demo',
  templateUrl: './email-demo.component.html',
})
export class EmailDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  placeholder = 'fred@theneighborhood.com';
  label = 'Email';
  minlength = '7';
  formControlName = 'email';

  disabledControl=true;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      email: new FormControl('fred@neighbor.com', Validators.email),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      email: new FormControl('', Validators.email),
    });

    this.requiredFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.disabledFormGroup = new FormGroup({
      email: new FormControl(
        { value: 'donotreply@thestreet.com', disabled: true },
        Validators.email
      ),
    });
  }

  disableControl(): void {
    if (this.disabledControl) {
      this.disabledFormGroup.get('email').enable();
    } else {
      this.disabledFormGroup.get('email').disable();
    }

    this.disabledControl = !this.disabledControl;
  }
}
