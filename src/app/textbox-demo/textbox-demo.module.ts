import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextboxDemoRoutingModule } from './textbox-demo-routing.module';
import { TextboxDemoComponent } from './textbox-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxModule } from 'projects/controls/src/lib/textbox/textbox.module';


@NgModule({
  declarations: [
    TextboxDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextboxDemoRoutingModule,
    TextboxModule
  ]
})
export class TextboxDemoModule { }
