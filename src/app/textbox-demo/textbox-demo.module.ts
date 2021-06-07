import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextboxModule } from 'projects/controls/src/lib/textbox/textbox.module';
import { TextboxModule as MaterialTextboxModule } from 'projects/material-controls/src/lib/textbox/textbox.module';

import { TextboxDemoRoutingModule } from './textbox-demo-routing.module';
import { TextboxDemoComponent } from './textbox-demo.component';
import { ControlOptionsModule } from '../control-options/control-options.module';


@NgModule({
  declarations: [
    TextboxDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextboxDemoRoutingModule,
    ControlOptionsModule,
    TextboxModule,
    MaterialTextboxModule
  ]
})
export class TextboxDemoModule { }
