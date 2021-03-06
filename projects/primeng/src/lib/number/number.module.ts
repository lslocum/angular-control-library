import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [NumberComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
  exports: [NumberComponent],
})
export class NumberModule {}
