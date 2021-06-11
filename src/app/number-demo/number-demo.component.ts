import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { getDefaultNumber, INumber } from 'projects/controls/src/lib/interfaces/number-interface';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-number-demo',
  templateUrl: './number-demo.component.html',
})
export class NumberDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  disabled = false;
  formGroup: FormGroup;
  formControlName = 'number';
  numberProperties: INumber;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      number: new FormControl(),
    });
    this.numberProperties = getDefaultNumber({ label: 'Age' });
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

  updateNumberProperties(value: INumber): void {
    this.numberProperties = { ...value };
    this.setValidators();
  }

  private setValidators(): void {
    const baseValidators = [Validators.email];

    if (this.numberProperties.min) {
      baseValidators.push(Validators.min(this.numberProperties.min));
    }

    if (this.numberProperties.max) {
      baseValidators.push(Validators.max(this.numberProperties.max));
    }

    if (this.numberProperties.required) {
      baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
