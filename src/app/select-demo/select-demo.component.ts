import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
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
  label = 'Dream Car';
  placeholder: string;
  appearance: MatFormFieldAppearance;
  disableOptionCentering: boolean;

  options = [
    { name: 'Chevy Corvette', id: '1' },
    { name: 'Audi R8', id: '2' },
    { name: 'Porsche 911', id: '3' },
    { name: 'Lamborghini Huracán', id: '4' },
    { name: 'Lexus LC', id: '5' },
    { name: 'McLaren 720S', id: '6' },
    { name: 'Ferrari 812 Superfast', id: '7' },
  ];
  nameProperty = 'name';
  valueProperty = 'id';

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        lib === 'Material' ? (this.appearance = 'standard') : undefined;
        lib === 'Material' ? (this.disableOptionCentering = false) : undefined;
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      select: new FormControl(),
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

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  appearanceUpdated(value): void {
    this.appearance = value;
  }

  disableOptionCenteringUpdated(value): void {
    this.disableOptionCentering = value;
  }
}
