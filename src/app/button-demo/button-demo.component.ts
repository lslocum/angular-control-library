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
  disabled = false;
  label: string;

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary.pipe(
      tap((lib) => {
        switch (lib) {
          case controlLibraryTypes[controlLibraryTypes.HTML]:
            this.buttonProperties = getDefaultButton({
              display: 'filled',
              hasShadow: false,
              icon: null,
              isRounded: false,
              label: 'Click me!',
              size: 'medium',
              type: 'text',
            });
            break;
          case controlLibraryTypes[controlLibraryTypes.Material]:
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
            break;
          case controlLibraryTypes[controlLibraryTypes['Prime-NG']]:
            this.buttonProperties = getDefaultButton({
              color: 'primary',
              display: 'filled',
              hasShadow: false,
              icon: 'pi pi-heart',
              isRounded: false,
              label: 'Click me!',
              size: 'medium',
              type: 'text',
            });
            break;
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

  labelUpdated(value) {
    this.buttonProperties = { ...this.buttonProperties, label: value };
  }

  toggleDisabled(value: boolean): void {
    this.disabled = value;
  }
}
