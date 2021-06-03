import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BehaviorSubject } from 'rxjs';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {
  selectedLibrary$: BehaviorSubject<string>;
  disabled = false;
  color: ThemePalette = 'primary';
  type = '';

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary;
  }

  buttonClicked() {
    alert('🐱‍🏍🐱‍🚀🐱‍👓 Button Clicked 🐱‍🏍🐱‍🚀🐱‍👓');
  }

  toggleDisabled(value: boolean): void {
    this.disabled = value;
  }

  colorUpdated(value): void {
    this.color = value;
  }

  buttonTypeUpdated(value): void {
    this.type = value;
  }
}
