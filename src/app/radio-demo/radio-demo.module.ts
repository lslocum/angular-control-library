import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioDemoRoutingModule } from './radio-demo-routing.module';
import { RadioDemoComponent } from './radio-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioModule } from 'projects/controls/src/public-api';
import { ControlOptionsModule } from '../control-options/control-options.module';

@NgModule({
  declarations: [RadioDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RadioDemoRoutingModule,
    RadioModule,
    ControlOptionsModule
  ],
})
export class RadioDemoModule {}
