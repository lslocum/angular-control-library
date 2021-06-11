import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { getDefaultPhone, IPhone } from 'projects/controls/src/lib/interfaces/phone-interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-phone-demo',
  templateUrl: './phone-demo.component.html',
})
export class PhoneDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  disabled: boolean;
  formGroup: FormGroup;
  formControlName = 'phone';
  phoneProperties: IPhone;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      phone: new FormControl(),
    });

    this.phoneProperties = getDefaultPhone({
      appearance: 'standard',
      id: this.formControlName,
      label: 'Phone',
      name: this.formControlName,
      placeholder: '620-431-6000',
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

  updatePhoneProperties(value: IPhone): void {
    this.phoneProperties = { ...value };
    this.setValidators();
  }

  private setValidators(): void {
    const baseValidators = [];

    if (this.phoneProperties.minlength) {
      baseValidators.push(Validators.minLength(this.phoneProperties.minlength));
    }

    if (this.phoneProperties.pattern) {
      baseValidators.push(Validators.pattern(this.phoneProperties.pattern));
    }

    if (this.phoneProperties.required) {
      baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
