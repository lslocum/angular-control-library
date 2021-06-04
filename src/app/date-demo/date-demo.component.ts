import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-date-demo',
  templateUrl: './date-demo.component.html',
})
export class DateDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'date';
  label = 'Birthday';
  required = false;
  disabled = false;
  appearance: MatFormFieldAppearance;
  color: ThemePalette;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        this.color = null; // TODO: Make this work when we haven't implemented all material date options
        lib === 'Material' ? (this.appearance = 'standard') : undefined;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl(),
      matdate: new FormControl(),
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
      this.formGroup.get(this.formControlName).clearValidators();
    } else {
      this.formGroup.get(this.formControlName).setValidators(Validators.required);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();

    this.required = value;
  }

  updateLabel(value: string) {
    this.label = value;
  }

  colorUpdated(value): void {
    this.color = value;
  }

  appearanceUpdated(value): void {
    this.appearance = value;
  }
}

function jsDateToInputDate(date: Date): string {
  return date.toLocaleDateString('en-CA');
}
