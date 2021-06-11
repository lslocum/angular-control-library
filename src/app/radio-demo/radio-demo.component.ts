import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { getDefaultRadio, IRadio } from 'projects/controls/src/lib/interfaces/radio-interface';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-radio-demo',
  templateUrl: './radio-demo.component.html',
})
export class RadioDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'radio';
  disabled = false;
  radioProperties: IRadio;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      radio: new FormControl('2'),
    });

    this.radioProperties = getDefaultRadio({
      id: this.formControlName,
      label: 'Favorite Friend',
      name: this.formControlName,
      nameProperty: 'name',
      options: [
        { name: 'Joey', id: '1' },
        { name: 'Phoebe', id: '2' },
        { name: 'Ross', id: '3' },
        { name: 'Rachel', id: '4' },
        { name: 'Monica', id: '5' },
        { name: 'Chandler', id: '6' },
      ],
      valueProperty: 'id',
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

  updateRadioProperties(value: IRadio): void {
    this.radioProperties = { ...value };
  }
}
