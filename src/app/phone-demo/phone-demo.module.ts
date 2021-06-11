import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhoneModule } from 'projects/controls/src/public-api';
import { PhoneModule as MaterialPhoneModule } from 'projects/material-controls/src/public-api';
import { PhoneModule as PrimePhoneModule } from 'projects/primeng/src/public-api';

import { ControlOptionsModule } from '../control-options/control-options.module';
import { PhoneDemoRoutingModule } from './phone-demo-routing.module';
import { PhoneDemoComponent } from './phone-demo.component';


@NgModule({
  declarations: [
    PhoneDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PhoneDemoRoutingModule,
    ControlOptionsModule,
    PhoneModule,
    MaterialPhoneModule,
    PrimePhoneModule
  ]
})
export class PhoneDemoModule { }
