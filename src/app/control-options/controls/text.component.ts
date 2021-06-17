import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `
    <span *ngIf="value !== undefined">
      <label [for]="propertyName">{{ label }}</label>
      <input type="text" [name]="propertyName" [value]="value" (change)="onChange($event)" />
    </span>
  `,
  styles: [],
})
export class TextComponent {
  @Input() label: string;
  @Input() propertyName: string;
  @Input() value: any;
  @Output() update = new EventEmitter<{ property: string; value: string }>();

  onChange(event): void {
    this.update.emit({ property: this.propertyName, value: event.target.value });
  }
}
