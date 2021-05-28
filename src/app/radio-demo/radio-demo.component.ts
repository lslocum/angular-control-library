import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-demo',
  templateUrl: './radio-demo.component.html',
})
export class RadioDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  label = 'Fav. Friends Character';
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

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      radio1: new FormControl('2'),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      radio2: new FormControl(''),
    });

    this.disabledFormGroup = new FormGroup({
      radio3: new FormControl({ value: '5', disabled: true }),
    });
  }
}
