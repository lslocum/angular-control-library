import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberDemoRoutingModule } from './number-demo-routing.module';
import { NumberDemoComponent } from './number-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberModule } from 'projects/controls/src/lib/number/number.module';

@NgModule({
  declarations: [NumberDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NumberDemoRoutingModule,
    NumberModule,
  ],
})
export class NumberDemoModule {}
