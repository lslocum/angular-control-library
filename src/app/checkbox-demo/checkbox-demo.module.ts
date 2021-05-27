import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxDemoRoutingModule } from './checkbox-demo-routing.module';
import { CheckboxDemoComponent } from './checkbox-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'projects/controls/src/lib/checkbox/checkbox.module';

@NgModule({
  declarations: [CheckboxDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxDemoRoutingModule,
    CheckboxModule,
  ],
})
export class CheckboxDemoModule {}
