import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeDemoRoutingModule } from './time-demo-routing.module';
import { TimeDemoComponent } from './time-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeModule } from 'projects/controls/src/lib/time/time.module';
import { ControlOptionsModule } from '../control-options/control-options.module';


@NgModule({
  declarations: [
    TimeDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimeDemoRoutingModule,
    TimeModule,
    ControlOptionsModule
  ]
})
export class TimeDemoModule { }