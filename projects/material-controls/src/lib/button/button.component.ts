import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'matti-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'raised' | 'flat' | 'stroked' | 'icon' | 'fab' | 'mini-fab';
  @Input() color: ThemePalette;
  @Input() ngClass: string[] = [];
  @Input() id: string;
  @Input() disabled: boolean = true;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  handleOnClick(): void {
    this.clicked.emit();
  }
}
