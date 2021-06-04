import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NumberComponent],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [NumberComponent],
})
export class NumberModule {}
