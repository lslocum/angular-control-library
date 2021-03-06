import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NumberComponent } from './number.component';

@NgModule({
  declarations: [NumberComponent],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [NumberComponent],
})
export class NumberModule {}
