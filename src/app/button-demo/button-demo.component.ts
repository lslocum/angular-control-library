import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { controlLibraryTypes } from '../library-types';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {
  controlLibraryTypes = controlLibraryTypes;
  selectedLibrary$: BehaviorSubject<string>;
  disabled = false;
  color = 'primary';
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
    console.log('color updated', this.color)
  }

  buttonTypeUpdated(value): void {
    this.type = value;
  }
}
