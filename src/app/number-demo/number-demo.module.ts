import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberDemoRoutingModule } from './number-demo-routing.module';
import { NumberDemoComponent } from './number-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberModule } from 'projects/controls/src/lib/number/number.module';
import { ControlOptionsModule } from '../control-options/control-options.module';

@NgModule({
  declarations: [NumberDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NumberDemoRoutingModule,
    NumberModule,
    ControlOptionsModule
  ],
})
export class NumberDemoModule {}
