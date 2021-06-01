import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-textbox-demo',
  templateUrl: './textbox-demo.component.html',
})
export class TextboxDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  formControlName = 'textbox';
  label = 'User Name';
  placeholder = 'Enter user name';
  minlength = '3';
  maxlength = '10';
  pattern = '[A-Za-z]+';

  disabledControl = true;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      textbox: new FormControl('value'),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      textbox: new FormControl(''),
    });

    this.requiredFormGroup = new FormGroup({
      textbox: new FormControl('', Validators.required),
    });

    this.disabledFormGroup = new FormGroup({
      textbox: new FormControl({
        value: 'I am disabled',
        disabled: this.disabledControl,
      }),
    });
  }

  disableControl(): void {
    if (this.disabledControl) {
      this.disabledFormGroup.get('textbox').enable();
    } else {
      this.disabledFormGroup.get('textbox').disable();
    }

    this.disabledControl = !this.disabledControl;
  }
}
