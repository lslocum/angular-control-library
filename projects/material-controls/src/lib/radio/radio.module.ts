import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent],
  imports: [CommonModule, FormsModule, MatRadioModule],
  exports: [RadioComponent],
})
export class RadioModule {}
