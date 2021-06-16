import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { getDefaultTextarea, ITextarea } from 'projects/controls/src/lib/interfaces/textarea-interface';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-textarea-demo',
  templateUrl: './textarea-demo.component.html',
})
export class TextareaDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  disabled: boolean;
  formGroup: FormGroup;
  formControlName = 'textarea';
  textareaProperties: ITextarea;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      textarea: new FormControl(),
    });

    this.textareaProperties = getDefaultTextarea({
      id: this.formControlName,
      label: 'Bio',
      name: this.formControlName,
      placeholder: 'Tell me about you',
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

  updateTextareaProperties(value: ITextarea) {
    this.textareaProperties = { ...value };
    this.setValidators();
    console.log('textarea properties', this.textareaProperties)
  }

  private setValidators(): void {
    const baseValidators = [];

    if (this.textareaProperties.required) {
      baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
