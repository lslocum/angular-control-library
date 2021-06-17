import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Position } from 'projects/controls/src/lib/interfaces/position';

@Component({
  selector: 'app-label-position',
  template: `
  <span *ngIf="position !== undefined">
    <label for="labelPosition">Label Position</label>
    <select id="labelPosition" name="labelPosition" [value]="position" (change)="onChange($event)">
      <option value="before">Before</option>
      <option value="after">After</option>
    </select>
  </span>
  `,
  styles: [
  ]
})
export class LabelPositionComponent {
  @Input() position: Position;
  @Output() update = new EventEmitter<{ property: string; value: string }>();

  onChange(event): void {
    this.update.emit({ property: 'labelPosition', value: event.target.value });
  }

}
