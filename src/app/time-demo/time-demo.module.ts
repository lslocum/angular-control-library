import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TimeModule } from 'projects/controls/src/lib/time/time.module';
import { TimeModule as MaterialTimeModule } from 'projects/material-controls/src/lib/time/time.module';

import { ControlOptionsModule } from '../control-options/control-options.module';
import { TimeDemoRoutingModule } from './time-demo-routing.module';
import { TimeDemoComponent } from './time-demo.component';

@NgModule({
  declarations: [TimeDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimeDemoRoutingModule,
    ControlOptionsModule,
    TimeModule,
    MaterialTimeModule,
  ],
})
export class TimeDemoModule {}
