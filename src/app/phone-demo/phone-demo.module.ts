import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneDemoRoutingModule } from './phone-demo-routing.module';
import { PhoneDemoComponent } from './phone-demo.component';
import { PhoneModule } from 'projects/controls/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlOptionsModule } from '../control-options/control-options.module';


@NgModule({
  declarations: [
    PhoneDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PhoneDemoRoutingModule,
    PhoneModule,
    ControlOptionsModule
  ]
})
export class PhoneDemoModule { }
