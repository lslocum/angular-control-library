import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimeComponent],
  imports: [CommonModule, FormsModule],
  exports: [TimeComponent],
})
export class TimeModule {}
