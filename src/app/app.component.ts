import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { controlLibraries, controlLibraryTypes } from './library-types';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  controlLibraries = controlLibraries;
  selectedLibrary$: BehaviorSubject<string>;
  title = 'angular-control-library';

  constructor(private libraryService: LibraryService) {
    this.selectedLibrary$ = this.libraryService.selectedLibrary;
  }

  ngOnInit(): void{
    this.libraryService.setControlLibrary(controlLibraryTypes[2]);
  }

  updateControlLibrary(event): void {
    this.libraryService.setControlLibrary(event.target.value);
  }
}
