import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Direction } from 'projects/controls/src/lib/interfaces/direction';

@Component({
  selector: 'app-direction',
  template: `
    <span *ngIf="direction !== undefined">
      <label for="direction">Direction</label>
      <select id="direction" name="direction" [value]="direction" (change)="onChange($event)">
        <option value="vertical">Vertical</option>
        <option value="horizontal">Horizontal</option>
      </select>
    </span>
  `,
  styles: [],
})
export class DirectionComponent {
  @Input() direction: Direction;
  @Output() update = new EventEmitter<{ property: string; value: string }>();

  onChange(event): void {
    this.update.emit({ property: 'direction', value: event.target.value });
  }
}
