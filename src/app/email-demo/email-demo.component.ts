import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-email-demo',
  templateUrl: './email-demo.component.html',
})
export class EmailDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'email';
  label = 'Email';
  placeholder = 'fred@theneighborhood.com';
  minlength: number = null;
  maxlength: number;
  required = false;
  disabled = false;
  appearance: MatFormFieldAppearance;

  private baseValidators = [
    Validators.email,
    Validators.minLength(this.minlength),
  ];

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        lib === 'Material' ? (this.appearance = 'standard') : undefined;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', this.baseValidators),
    });
  }

  disableControl(value: boolean): void {
    if (value) {
      this.formGroup.get(this.formControlName).disable();
    } else {
      this.formGroup.get(this.formControlName).enable();
    }

    this.disabled = value;
  }

  toggleRequired(value: boolean) {
    this.required = value;
    this.setValidators({ setRequired: true });
  }

  updateMinLength(value: string) {
    this.minlength = +value;
    this.setValidators({ setMin: true });
  }

  updateMaxLength(value: string) {
    this.maxlength = +value;
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  appearanceUpdated(value): void {
    this.appearance = value;
  }

  private setValidators({
    setRequired,
    setMin,
  }: {
    setRequired?: boolean;
    setMin?: boolean;
  }): void {
    let validatorName = setRequired ? 'required' : '';

    const index = this.baseValidators.findIndex((v) => v.name == validatorName);
    if (index > -1) {
      this.baseValidators.slice(index, 1);
    }

    if (setMin && this.minlength) {
      this.baseValidators.push(Validators.minLength(this.minlength));
    } else if (setRequired) {
      this.baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(this.baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
