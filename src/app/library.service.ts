import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  selectedLibrary = new BehaviorSubject<string>('');

  setControlLibrary(newValue): void {
    if (newValue) {
      this.selectedLibrary.next(newValue);
    } else {
      console.error('No value was selected');
    }
  }
}
