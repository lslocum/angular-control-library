import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SelectModule } from 'projects/controls/src/lib/select/select.module';
import { SelectModule as MaterialSelectModule} from 'projects/material-controls/src/lib/select/select.module';
import { SelectModule as PrimeSelectModule} from 'projects/primeng/src/lib/select/select.module';

import { SelectDemoRoutingModule } from './select-demo-routing.module';
import { SelectDemoComponent } from './select-demo.component';
import { ControlOptionsModule } from '../control-options/control-options.module';

@NgModule({
  declarations: [SelectDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDemoRoutingModule,
    ControlOptionsModule,
    SelectModule,
    MaterialSelectModule,
    PrimeSelectModule
  ],
})
export class SelectDemoModule {}
