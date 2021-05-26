import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-demo',
  templateUrl: './phone-demo.component.html',
  styleUrls: ['./phone-demo.component.scss'],
})
export class PhoneDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      textbox: new FormControl('6204316000', Validators.pattern(validPhoneNumberPattern)),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      textbox: new FormControl('', Validators.pattern(validPhoneNumberPattern)),
    });

    this.requiredFormGroup = new FormGroup({
      textbox: new FormControl('', Validators.required),
    });

    this.disabledFormGroup = new FormGroup({
      textbox: new FormControl('911', Validators.pattern(validPhoneNumberPattern)),
    });
  }
}

const validPhoneNumberPattern = '[0-9]{3}[0-9]{3}[0-9]{4}';