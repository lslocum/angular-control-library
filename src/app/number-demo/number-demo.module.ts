import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NumberModule } from 'projects/controls/src/lib/number/number.module';
import { NumberModule as MaterialNumberModule } from 'projects/material-controls/src/lib/number/number.module';
import { NumberModule as PrimeNumberModule } from 'projects/primeng/src/lib/number/number.module';

import { ControlOptionsModule } from '../control-options/control-options.module';
import { NumberDemoRoutingModule } from './number-demo-routing.module';
import { NumberDemoComponent } from './number-demo.component';

@NgModule({
  declarations: [NumberDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlOptionsModule,
    NumberDemoRoutingModule,
    NumberModule,
    MaterialNumberModule,
    PrimeNumberModule,
  ],
})
export class NumberDemoModule {}
