import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { TimeComponent } from './time.component';

@NgModule({
  declarations: [TimeComponent],
  imports: [CommonModule, FormsModule, CalendarModule],
  exports: [TimeComponent],
})
export class TimeModule {}
