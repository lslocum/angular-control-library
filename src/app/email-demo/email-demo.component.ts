import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { getDefaultEmail, IEmail } from 'projects/controls/src/lib/interfaces/email-interface';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-email-demo',
  templateUrl: './email-demo.component.html',
})
export class EmailDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  disabled = false;
  emailProperties: IEmail;
  formGroup: FormGroup;
  formControlName = 'email';

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl(),
    });

    this.emailProperties = getDefaultEmail({
      appearance: 'standard',
      id: this.formControlName,
      label: 'Email',
      name: this.formControlName,
      placeholder: 'email@domain.com',
    });
    this.setValidators();
  }

  disableControl(value: boolean): void {
    if (value) {
      this.formGroup.get(this.formControlName).disable();
    } else {
      this.formGroup.get(this.formControlName).enable();
    }

    this.disabled = value;
  }

  updateEmailProperties(value: IEmail): void {
    this.emailProperties = { ...value };
    this.setValidators();
  }

  private setValidators(): void {
    const baseValidators = [Validators.email];

    if (this.emailProperties.minlength) {
      baseValidators.push(Validators.minLength(this.emailProperties.minlength));
    }

    if (this.emailProperties.required) {
      baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
