import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-demo',
  templateUrl: './radio-demo.component.html',
})
export class RadioDemoComponent implements OnInit {
  formGroup: FormGroup;
  formControlName = 'radio';
  disabled = false;
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
}
