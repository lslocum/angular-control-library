import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateDemoRoutingModule } from './date-demo-routing.module';
import { DateDemoComponent } from './date-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateModule } from 'projects/controls/src/lib/date/date.module';


@NgModule({
  declarations: [
    DateDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DateDemoRoutingModule,
    DateModule
  ]
})
export class DateDemoModule { }
