import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  label = 'Favorite Friend';
  labelPosition: 'before' | 'after';
  color: ThemePalette;
  direction: 'vertical' | 'horizontal';

  options = [
    { name: 'Joey', id: '1' },
    { name: 'Phoebe', id: '2' },
    { name: 'Ross', id: '3' },
    { name: 'Rachel', id: '4' },
    { name: 'Monica', id: '5' },
    { name: 'Chandler', id: '6' },
  ];
  nameProperty = 'name';
  valueProperty = 'id';

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        if (lib === 'Material') {
          this.color = 'accent';
          this.labelPosition = 'before';
          this.direction = 'vertical';
        } else{
          this.color = undefined;
          this.labelPosition = undefined;
          this.direction = undefined;
        }
      })
    );
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      radio: new FormControl('2'),
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

  labelPositionUpdated(value): void {
    this.labelPosition = value;
  }

  directionUpdated(value): void {
    this.direction = value;
  }
}
