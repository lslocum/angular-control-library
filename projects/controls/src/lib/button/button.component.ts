import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ButtonDisplay, ButtonSize, ButtonTypes, IButton } from '../interfaces/button-interface';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges {
  @Input() buttonProperties: IButton;
  @Input() id: string;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  classList: string[];

  private classes: string[];
  private displayClass: ButtonDisplay;
  private roundedClass: string;
  private shadowClass: string;
  private sizeClass: string;
  private typeClass: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.buttonProperties) {
      const { classes, display, hasShadow, isRounded, size, type } = changes.buttonProperties.currentValue;
      this.classList = classes ? classes : this.classes?.length ? this.classes : [];

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

      this.setTypeClass(type);
      if (this.typeClass) {
        this.classList.push(this.typeClass);
      }
    }
  }

  handleOnClick(): void {
    this.clicked.emit();
  }

  private setDisplayClass(display?: ButtonDisplay): void {
    if (display !== undefined) {
      this.displayClass = display;
    }
  }

  private setRoundedClass(isRounded?: boolean): void {
    if (isRounded !== undefined) {
      this.roundedClass = isRounded ? 'round' : null;
    }
  }

  private setShadowClass(hasShadow?: boolean): void {
    if (hasShadow !== undefined) {
      this.shadowClass = hasShadow ? 'shadow' : null;
    }
  }

  private setSizeClass(size?: ButtonSize): void {
    let buttonSize: ButtonSize = size || this.buttonProperties.size || 'medium';

    if (buttonSize !== undefined) {
      this.sizeClass = buttonSize ? buttonSize : null;
    }
  }

  private setTypeClass(type?: ButtonTypes): void {
    if (type !== undefined) {
      this.typeClass = type === 'textWithIcon' ? 'text-with-icon' : type;
    }
  }
}
