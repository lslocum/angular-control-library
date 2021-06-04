import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DateModule } from 'projects/controls/src/lib/date/date.module';
import { DateModule as MaterialDateModule } from 'projects/material-controls/src/lib/date/date.module';

import { DateDemoRoutingModule } from './date-demo-routing.module';
import { DateDemoComponent } from './date-demo.component';
import { ControlOptionsModule } from '../control-options/control-options.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DateDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DateDemoRoutingModule,
    ControlOptionsModule,
    DateModule,
    MaterialDateModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DateDemoModule { }
