import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextareaDemoRoutingModule } from './textarea-demo-routing.module';
import { TextareaDemoComponent } from './textarea-demo.component';
import { TextareaModule } from 'projects/controls/src/lib/textarea/textarea.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TextareaDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaDemoRoutingModule,
    TextareaModule
  ]
})
export class TextareaDemoModule { }
