import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-demo',
  templateUrl: './email-demo.component.html',
  styleUrls: ['./email-demo.component.scss'],
})
export class EmailDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      email: new FormControl('fred@neighbor.com', Validators.email),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      email: new FormControl(),
    });

    this.requiredFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.disabledFormGroup = new FormGroup({
      email: new FormControl('I am disabled', Validators.email),
    });
  }
}
