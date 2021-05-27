import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea-demo',
  templateUrl: './textarea-demo.component.html',
})
export class TextareaDemoComponent implements OnInit {
  formGroupWithInitialValue: FormGroup;
  formGroupWithoutInitialValue: FormGroup;
  requiredFormGroup: FormGroup;
  disabledFormGroup: FormGroup;

  label = 'Bio';
  placeholder = 'Tell me about you';
  maxlength = '10';
  formControlName = 'textarea';
  cols = 100;
  rows = 5;
  hardWrap = 'hard';
  softWrap = 'soft';

  ngOnInit(): void {
    this.formGroupWithInitialValue = new FormGroup({
      textarea: new FormControl(`Call me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodologically knocking people's hats off - then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball... I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.`),
    });

    this.formGroupWithoutInitialValue = new FormGroup({
      textarea: new FormControl(''),
    });

    this.requiredFormGroup = new FormGroup({
      textarea: new FormControl('', Validators.required),
    });

    this.disabledFormGroup = new FormGroup({
      textarea: new FormControl({ value: 'I am disabled', disabled: true }),
    });
  }
}
