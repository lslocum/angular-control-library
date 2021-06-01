import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
})
export class SelectDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  disabledFormGroup: FormGroup;

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

  disabledControl = true;

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      select: new FormControl('2'),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      select: new FormControl(''),
    });

    this.disabledFormGroup = new FormGroup({
      select: new FormControl({ value: '5', disabled: true }),
    });
  }

  disableControl(): void {
    if (this.disabledControl) {
      this.disabledFormGroup.enable();
    } else {
      this.disabledFormGroup.disable();
    }

    this.disabledControl = !this.disabledControl;
  }
}
