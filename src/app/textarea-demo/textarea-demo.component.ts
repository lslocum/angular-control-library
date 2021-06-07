import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-textarea-demo',
  templateUrl: './textarea-demo.component.html',
})
export class TextareaDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'textarea';
  label = 'Bio';
  placeholder = 'Tell me about you';
  disabled = false;
  required = false;
  cols: number = null;
  rows: number = null;
  wrap = 'hard';
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
      textarea: new FormControl(),
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

  updateCols(value: number) {
    this.cols = value;
  }

  updateRows(value: number) {
    this.rows = value;
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  updateWrap(value: string) {
    this.wrap = value;
  }

  appearanceUpdated(value): void {
    this.appearance = value;
  }
}
