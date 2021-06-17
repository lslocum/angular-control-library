import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ButtonSize, getDefaultButton, IButton } from 'projects/controls/src/lib/interfaces/button-interface';

import { controlLibraryTypes } from '../library-types';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {
  selectedLibrary$: Observable<string>;
  buttonProperties: IButton;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        this.buttonProperties = getDefaultButton({
          color: 'primary',
          display: 'filled',
          hasShadow: false,
          icon: null,
          isRounded: false,
          label: 'Click me!',
          size: 'medium',
          type: 'text',
        });
        if (lib === controlLibraryTypes[controlLibraryTypes['Prime-NG']]) {
          this.buttonProperties.icon = 'pi pi-heart';
        }
      })
    );
  }

  buttonClicked() {
    alert('🐱‍🏍🐱‍🚀🐱‍👓 Button Clicked 🐱‍🏍🐱‍🚀🐱‍👓');
  }

  buttonPropertiesUpdated(value): void {
    this.buttonProperties = { ...value };
  }
}
