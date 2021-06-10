import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

import { DateComponent } from './date.component';

@NgModule({
  declarations: [DateComponent],
  imports: [CommonModule, FormsModule, CalendarModule],
  exports: [DateComponent],
})
export class DateModule {}
