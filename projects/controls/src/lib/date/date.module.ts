import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DateComponent],
  imports: [CommonModule, FormsModule],
  exports: [DateComponent],
})
export class DateModule {}
