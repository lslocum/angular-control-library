import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-phone-demo',
  templateUrl: './phone-demo.component.html',
})
export class PhoneDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'phone';
  label = 'Cell Phone';
  placeholder = '555-555-5555';
  pattern = validPhoneNumberPattern;
  required = false;
  disabled = false;
  appearance: MatFormFieldAppearance;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        lib === 'Material' ? (this.appearance = 'standard') : undefined;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      phone: new FormControl(
        '6204316000',
        Validators.pattern(validPhoneNumberPattern)
      ),
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
    if (!value) {
      this.formGroup.get(this.formControlName).setValidators(Validators.pattern(validPhoneNumberPattern));
    } else {
      this.formGroup
        .get(this.formControlName)
        .setValidators([Validators.pattern(validPhoneNumberPattern), Validators.required]);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();

    this.required = value;
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
}

const validPhoneNumberPattern = '[0-9]{3}[0-9]{3}[0-9]{4}';
