import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-appearance',
  template: `
  <span *ngIf="appearance !== undefined">
    <label for="appearance">Appearance</label>
    <select id="appearance" name="appearance" [value]="appearance" (change)="onChange($event)">
      <option value="legacy">Legacy</option>
      <option value="standard">Standard</option>
      <option value="fill">Fill</option>
      <option value="outline">Outline</option>
    </select>
  </span>
  `,
  styles: [
  ]
})
export class AppearanceComponent {
  @Input() appearance: MatFormFieldAppearance;
  @Output() update = new EventEmitter<{ property: string; value: string }>();

  onChange(event): void {
    this.update.emit({ property: 'appearance', value: event.target.value });
  }
}
