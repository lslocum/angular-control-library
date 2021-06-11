import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioButtonModule } from 'primeng/radiobutton';

import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent],
  imports: [CommonModule, FormsModule, RadioButtonModule],
  exports: [RadioComponent],
})
export class RadioModule {}
