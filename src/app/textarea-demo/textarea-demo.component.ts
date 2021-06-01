import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea-demo',
  templateUrl: './textarea-demo.component.html',
})
export class TextareaDemoComponent implements OnInit {
  formGroup: FormGroup;

  label = 'Bio';
  placeholder = 'Tell me about you';
  formControlName = 'textarea';
  cols = 100;
  rows = 5;
  wrap = 'hard';

  required = false;
  disabled = false;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      textarea: new FormControl(`Call me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodologically knocking people's hats off - then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball... I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.`),
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

  toggleRequired(value: boolean) {
    if (!value) {
      this.formGroup.get(this.formControlName).clearValidators();
    } else {
      this.formGroup
        .get(this.formControlName)
        .setValidators(Validators.required);
    }
    this.formGroup.get(this.formControlName).updateValueAndValidity();

    this.required = value;
  }

  updateCols(value: number) {
    this.cols = value;
  }

  updateRows(value: number) {
    this.rows = value;
  }

  updateLabel(value: string) {
    this.label = value;
  }

  updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  updateWrap(value: string) {
    this.wrap = value;
  }
}
