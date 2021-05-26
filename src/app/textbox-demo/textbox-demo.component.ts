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
      textbox: new FormControl({ value: 'I am disabled', disabled: true }),
    });
  }
}
