import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { getDefaultSelect, ISelect } from 'projects/controls/src/lib/interfaces/select-interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
})
export class SelectDemoComponent implements OnInit {
  selectedLibrary$: Observable<string>;
  formGroup: FormGroup;
  formControlName = 'select';
  disabled = false;
  selectProperties: ISelect;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.asObservable();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      select: new FormControl(),
    });

    this.selectProperties = getDefaultSelect({
      appearance: 'standard',
      id: this.formControlName,
      label: 'Dream Car',
      name: this.formControlName,
      nameProperty: 'name',
      options: [
        // { name: 'Select a Car', id: '0' },
        { name: 'Chevy Corvette', id: '1' },
        { name: 'Audi R8', id: '2' },
        { name: 'Porsche 911', id: '3' },
        { name: 'Lamborghini Huracán', id: '4' },
        { name: 'Lexus LC', id: '5' },
        { name: 'McLaren 720S', id: '6' },
        { name: 'Ferrari 812 Superfast', id: '7' },
      ],
      valueProperty: 'id',
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

  updateSelectProperties(value: ISelect): void {
    this.selectProperties = { ...value };
    this.setValidators();
  }

  private setValidators(): void {
    const baseValidators = [];

    if (this.selectProperties.required) {
      baseValidators.push(Validators.required);
    }

    this.formGroup.get(this.formControlName).setValidators(baseValidators);
    this.formGroup.get(this.formControlName).updateValueAndValidity();
  }
}
