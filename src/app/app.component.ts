import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TextboxComponent } from 'controls/lib/textbox/textbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  controlLibraries = ['HTML', 'Material', 'Prime-NG'];
  selectedLibrary: string = 'HTML';
  title = 'angular-control-library';

  setControlLibrary(event): void {
    console.log(event);
    this.selectedLibrary = event.target.value;
  }
}
