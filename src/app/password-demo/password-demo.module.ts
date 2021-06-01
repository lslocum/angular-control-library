import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-demo-routing.module';
import { PasswordDemoComponent } from './password-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'projects/controls/src/lib/password/password.module';
import { ControlOptionsModule } from '../control-options/control-options.module';

@NgModule({
  declarations: [PasswordDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordRoutingModule,
    PasswordModule,
    ControlOptionsModule
  ],
})
export class PasswordDemoModule {}
