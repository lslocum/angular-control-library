import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailDemoRoutingModule } from './email-demo-routing.module';
import { EmailDemoComponent } from './email-demo.component';
import { EmailModule } from 'projects/controls/src/lib/email/email.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxModule } from 'projects/controls/src/public-api';
import { ControlOptionsModule } from '../control-options/control-options.module';


@NgModule({
  declarations: [
    EmailDemoComponent
  ],
  imports: [
    CommonModule,
    EmailDemoRoutingModule,
    EmailModule,
    FormsModule,
    ReactiveFormsModule,
    ControlOptionsModule
  ]
})
export class EmailDemoModule { }
