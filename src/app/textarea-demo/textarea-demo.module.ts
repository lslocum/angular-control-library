import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextareaModule } from 'projects/controls/src/lib/textarea/textarea.module';
import { TextareaModule as MaterialTextareaModule } from 'projects/material-controls/src/lib/textarea/textarea.module';
import { TextareaModule as PrimeTextareaModule } from 'projects/primeng/src/lib/textarea/textarea.module';

import { ControlOptionsModule } from '../control-options/control-options.module';
import { TextareaDemoRoutingModule } from './textarea-demo-routing.module';
import { TextareaDemoComponent } from './textarea-demo.component';

@NgModule({
  declarations: [TextareaDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaDemoRoutingModule,
    ControlOptionsModule,
    TextareaModule,
    MaterialTextareaModule,
    PrimeTextareaModule,
  ],
})
export class TextareaDemoModule {}
