import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-number-demo',
  templateUrl: './number-demo.component.html',
})
export class NumberDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'number';
  label = 'Age';
  placeholder = 'Your age';
  disabled = false;
  required = false;
  min: number = null;
  max: number = null;
  step: number = null;
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
      number: new FormControl(null, [Validators.min(this.min), Validators.max(this.max)]),
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

  updateMin(value: string) {
    this.min = +value;
    this.updateValidators();
  }

  updateMax(value: string) {
    this.max = +value;
    this.updateValidators();
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  updateStep(value: string) {
    this.step = +value;
  }

  appearanceUpdated(value): void {
    this.appearance = value;
  }

  private updateValidators() {
    this.formGroup.get(this.formControlName).setValidators([Validators.min(this.min), Validators.max(this.max)])
  }
}
