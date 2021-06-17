import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `
  <span *ngIf="value !== undefined">
    <input
      type="checkbox"
      [name]="propertyName"
      [value]="value"
      (click)="onChange($event)"
    />
    <label [for]="propertyName">{{ label }}</label>
  </span>
  `,
  styles: [],
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() propertyName: string;
  @Input() value: any;
  @Output() update = new EventEmitter<{ property: string; value: boolean }>();

  onChange(): void {
    this.update.emit({ property: this.propertyName, value: !this.value });
  }
}
