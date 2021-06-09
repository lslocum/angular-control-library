import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IButton } from 'projects/controls/src/lib/interfaces/button-interface';

@Component({
  selector: 'matti-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnChanges {
  @Input() buttonProperties: IButton;
  @Input() disabled: boolean = true;
  @Input() id: string;
  @Input() ngClass: string[] = [];
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  color: ThemePalette;
  type: 'raised' | 'flat' | 'stroked' | 'icon' | 'fab' | 'mini-fab';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.buttonProperties) {
      const { color, display, hasShadow, isRounded, size, type } = this.buttonProperties;
      if (color) {
        this.color = color;
      }

      if (display) {
        if (display === 'outlined') {
          this.type = 'stroked';
        } else if (display === 'filled') {
          this.type = 'flat';
        } else {
          this.type = null;
        }
      }

      if (hasShadow) {
        this.type = 'raised';
      }

      if (type && type === 'icon') {
        this.type = 'icon';
      }

      if (isRounded && size) {
        if (size === 'small') {
          this.type = 'mini-fab';
        } else {
          this.type = 'fab';
        }
      }
    }
  }

  handleOnClick(): void {
    this.clicked.emit();
  }
}
