import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { getDefaultTime, ITime } from 'projects/controls/src/lib/interfaces/time-interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-time-demo',
  templateUrl: './time-demo.component.html',
})
export class TimeDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  disabled = false;
  formGroup: FormGroup;
  formControlName = 'time';
  timeProperties: ITime;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({ time: new FormControl() });

    this.timeProperties = getDefaultTime({
      id: this.formControlName,
      label: 'Appointment Time',
      name: this.formControlName,
      placeholder: 'Pick a time',
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

  updateTimeProperties(value: ITime) {
    this.timeProperties = { ...value };
    this.setValidators();
  }

  private setValidators(): void {
    const baseValidators = [];

    if (this.timeProperties.required) {
      baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
