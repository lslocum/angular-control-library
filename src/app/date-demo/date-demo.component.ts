import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { getDefaultDate, IDate } from 'projects/controls/src/lib/interfaces/date-interface';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-date-demo',
  templateUrl: './date-demo.component.html',
})
export class DateDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  dateProperties: IDate;
  disabled = false;
  formGroup: FormGroup;
  formControlName = 'date';

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        this.dateProperties.color = null; // TODO: Make this work when we haven't implemented all material date options
        lib === 'Material' ? (this.dateProperties.appearance = 'standard') : undefined;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl(),
      matdate: new FormControl(),
    });

    this.dateProperties = getDefaultDate({
      label: 'Date of Birth',
      id: this.formControlName,
      name: this.formControlName,
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

  updateDateProperties(value: IDate) {
    this.dateProperties = { ...value };
    this.toggleRequired(this.dateProperties.required);
  }

  private toggleRequired(value: boolean) {
    if (!value) {
      this.formGroup.get(this.formControlName).clearValidators();
    } else {
      this.formGroup.get(this.formControlName).setValidators(Validators.required);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
