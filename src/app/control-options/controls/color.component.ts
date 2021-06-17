import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-color',
  template: `
  <span *ngIf="color !== undefined">
    <label for="color">Color</label>
    <select id="color" name="color" [value]="color" (change)="onChange($event)">
      <option value="primary">Primary</option>
      <option value="accent">Accent</option>
      <option value="warn">Warn</option>
    </select>
  </span>
  `,
  styles: [
  ]
})
export class ColorComponent {
  @Input() color: ThemePalette;
  @Output() update = new EventEmitter<{ property: string; value: string }>();

  onChange(event): void {
    this.update.emit({ property: 'color', value: event.target.value });
  }
}
