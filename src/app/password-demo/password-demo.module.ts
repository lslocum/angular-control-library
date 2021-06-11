import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordModule } from 'projects/controls/src/lib/password/password.module';
import { PasswordModule as MaterialPasswordModule } from 'projects/material-controls/src/lib/password/password.module';
import { PasswordModule as PrimePasswordModule } from 'projects/primeng/src/lib/password/password.module';

import { ControlOptionsModule } from '../control-options/control-options.module';
import { PasswordRoutingModule } from './password-demo-routing.module';
import { PasswordDemoComponent } from './password-demo.component';

@NgModule({
  declarations: [PasswordDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlOptionsModule,
    PasswordRoutingModule,
    PasswordModule,
    MaterialPasswordModule,
    PrimePasswordModule
  ],
})
export class PasswordDemoModule {}
