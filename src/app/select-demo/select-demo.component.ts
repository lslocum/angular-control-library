import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
})
export class SelectDemoComponent implements OnInit {
  formGroup: FormGroup;
  formControlName = 'select';
  disabled = false;
  label = 'Dream Car';

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

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      select: new FormControl('2'),
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
}
