import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextareaDemoRoutingModule } from './textarea-demo-routing.module';
import { TextareaDemoComponent } from './textarea-demo.component';
import { TextareaModule } from 'projects/controls/src/lib/textarea/textarea.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlOptionsModule } from '../control-options/control-options.module';


@NgModule({
  declarations: [
    TextareaDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaDemoRoutingModule,
    TextareaModule,
    ControlOptionsModule
  ]
})
export class TextareaDemoModule { }
