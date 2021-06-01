import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDemoRoutingModule } from './select-demo-routing.module';
import { SelectDemoComponent } from './select-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'projects/controls/src/lib/select/select.module';
import { ControlOptionsModule } from '../control-options/control-options.module';

@NgModule({
  declarations: [SelectDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDemoRoutingModule,
    SelectModule,
    ControlOptionsModule
  ],
})
export class SelectDemoModule {}
