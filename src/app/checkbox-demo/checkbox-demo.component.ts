import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { getDefaultCheckbox, ICheckbox } from 'projects/controls/src/lib/interfaces/checkbox-interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { controlLibraryTypes } from '../library-types';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
})
export class CheckboxDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  checkboxProperties: ICheckbox;
  disabled = false;
  formGroup: FormGroup;
  formControlName = 'checkbox';

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        lib === controlLibraryTypes[controlLibraryTypes.Material] ? (this.checkboxProperties.color = 'primary') : null;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      checkbox: new FormControl(),
    });

    this.checkboxProperties = getDefaultCheckbox({
      id: this.formControlName,
      label: 'I Agree',
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

  updateCheckboxProperties(value: ICheckbox): void {
    this.checkboxProperties = { ...value };
    console.log('updateCheckboxProperties', this.checkboxProperties);
  }

  updateLabel(value: string) {
    // this.label = value;
  }

  colorUpdated(value): void {
    // this.color = value;
  }
}
