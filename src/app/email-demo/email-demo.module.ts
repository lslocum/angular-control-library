import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailModule } from 'projects/controls/src/lib/email/email.module';
import { EmailModule as MaterialEmailModule } from 'projects/material-controls/src/lib/email/email.module';
import { EmailModule as PrimeEmailModule } from 'projects/primeng/src/lib/email/email.module';

import { ControlOptionsModule } from '../control-options/control-options.module';
import { EmailDemoRoutingModule } from './email-demo-routing.module';
import { EmailDemoComponent } from './email-demo.component';


@NgModule({
  declarations: [
    EmailDemoComponent
  ],
  imports: [
    CommonModule,
    EmailDemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ControlOptionsModule,
    EmailModule,
    MaterialEmailModule,
    PrimeEmailModule
  ]
})
export class EmailDemoModule { }
