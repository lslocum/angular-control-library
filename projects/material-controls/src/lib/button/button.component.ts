import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'matti-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() color: ThemePalette;
  @Input() disabled: boolean = true;
  @Input() id: string;
  @Input() ngClass: string[] = [];
  @Input() type: 'raised' | 'flat' | 'stroked' | 'icon' | 'fab' | 'mini-fab';
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  handleOnClick(): void {
    this.clicked.emit();
  }
}
