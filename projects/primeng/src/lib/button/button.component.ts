import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  ButtonColor,
  ButtonDisplay,
  ButtonSize,
  ButtonTypes,
  IButton,
} from 'projects/controls/src/lib/interfaces/button-interface';


@Component({
  selector: 'prime-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnChanges {
  @Input() buttonProperties: IButton;
  @Input() disabled: boolean;
  @Input() id: string;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  classList: string[] = [];
  icon: string;
  label: string;
  severity: string;

  private colorClass: string = '';
  private displayClass: string = '';
  private roundedClass: string = '';
  private shadowClass: string;
  private sizeClass: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.buttonProperties) {
      const { classes, color, display, hasShadow, icon, label, isRounded, size, type } = this.buttonProperties;

      this.classList = classes ? classes : [];

      this.icon = type === 'icon' || type === 'textWithIcon' ? icon : null;
      this.label = type === 'icon' ? null : label;

      this.setColorClass(color);
      if (this.colorClass) {
        this.classList.push(this.colorClass);
      }

      this.setDisplayClass(display);
      if (this.displayClass) {
        this.classList.push(this.displayClass);
      }

      this.setRoundedClass(isRounded);
      if (this.roundedClass) {
        this.classList.push(this.roundedClass);
      }

      this.setShadowClass(hasShadow);
      if (this.shadowClass) {
        this.classList.push(this.shadowClass);
      }

      this.setSizeClass(size);
      if (this.sizeClass) {
        this.classList.push(this.sizeClass);
      }

      console.log('classList', this.classList);
    }
  }

  handleOnClick(): void {
    this.clicked.emit();
  }

  private setColorClass(color: ButtonColor): void {
    this.colorClass = '';

    if (color !== undefined) {
      if (color === 'accent') {
        this.colorClass = 'p-button-secondary';
      } else if (color === 'warn') {
        this.colorClass = 'p-button-warning';
      }
    }
  }

  private setDisplayClass(display: ButtonDisplay): void {
    this.displayClass = '';
    if (display !== undefined) {
      if (display === 'outlined') {
        this.displayClass = 'p-button-outlined';
      } else if (this.buttonProperties.type === 'link') {
        this.displayClass = 'p-button-link';
      } else if (display === 'inverted') {
        this.displayClass = 'p-button-text';
      } else {
        this.displayClass = 'p-button';
      }
    }
  }

  private setRoundedClass(isRounded: boolean): void {
    if (isRounded !== undefined) {
      this.roundedClass = isRounded ? 'p-button-rounded' : null;
    } else {
      this.roundedClass = null;
    }
  }

  private setShadowClass(hasShadow: boolean): void {
    if (hasShadow !== undefined) {
      this.shadowClass = hasShadow ? 'p-button-raised' : null;
    } else {
      this.shadowClass = null;
    }
  }

  private setSizeClass(size: ButtonSize): void {
    this.sizeClass = null;
    if (size) {
      switch (size) {
        case 'small':
          this.sizeClass = 'p-button-sm';
          break;
        case 'large':
          this.sizeClass = 'p-button-lg';
          break;
        default:
          this.sizeClass = 'p-button';
      }
    }
  }
}
