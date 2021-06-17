import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { getDefaultTextbox, ITextbox } from 'projects/controls/src/lib/interfaces/textbox-interface';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-textbox-demo',
  templateUrl: './textbox-demo.component.html',
})
export class TextboxDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  disabled: boolean= false;
  formGroup: FormGroup;
  formControlName = 'textbox';
  textboxProperties: ITextbox;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      textbox: new FormControl(),
    });

    this.textboxProperties = getDefaultTextbox({
      id: this.formControlName,
      label: 'Name',
      name: this.formControlName,
      pattern: '[A-Za-z]+',
      placeholder: 'Your Name',
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

  updateTextboxProperties(value: ITextbox): void {
    this.textboxProperties = { ...value };
    this.setValidators();
  }

  private setValidators(): void {
    const baseValidators = [];

    if (this.textboxProperties.minlength) {
      baseValidators.push(Validators.minLength(this.textboxProperties.minlength));
    }

    if (this.textboxProperties.pattern) {
      baseValidators.push(Validators.pattern(this.textboxProperties.pattern));
    }

    if (this.textboxProperties.required) {
      baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
