import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NumberComponent],
  imports: [CommonModule, FormsModule],
  exports: [NumberComponent],
})
export class NumberModule {}
