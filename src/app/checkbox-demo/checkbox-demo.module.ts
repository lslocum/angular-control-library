import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxModule } from 'projects/controls/src/lib/checkbox/checkbox.module';
import { CheckboxModule as MaterialCheckboxModule } from 'projects/material-controls/src/lib/checkbox/checkbox.module';

import { ControlOptionsModule } from '../control-options/control-options.module';
import { CheckboxDemoRoutingModule } from './checkbox-demo-routing.module';
import { CheckboxDemoComponent } from './checkbox-demo.component';

@NgModule({
  declarations: [CheckboxDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlOptionsModule,
    CheckboxDemoRoutingModule,
    CheckboxModule,
    MaterialCheckboxModule
  ],
})
export class CheckboxDemoModule {}
