import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ButtonDemoRoutingModule } from './button-demo-routing.module';
import { ButtonDemoComponent } from './button-demo.component';
import { ButtonModule } from 'projects/controls/src/lib/button/button.module';
import { ButtonModule as MaterialButtonModule } from 'projects/material-controls/src/lib/button/button.module';
import { ControlOptionsModule } from '../control-options/control-options.module';

@NgModule({
  declarations: [ButtonDemoComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ControlOptionsModule,
    ButtonDemoRoutingModule,
    ButtonModule,
    MaterialButtonModule,
  ],
})
export class ButtonDemoModule {}
