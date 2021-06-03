import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
})
export class CheckboxDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'checkbox';
  label = 'I Agree';
  disabled = false;
  color: ThemePalette;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        this.color = lib === 'Material' ? 'primary' : null;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      checkbox: new FormControl(),
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

  updateLabel(value: string) {
    this.label = value;
  }

  colorUpdated(value): void {
    this.color = value;
  }
}
