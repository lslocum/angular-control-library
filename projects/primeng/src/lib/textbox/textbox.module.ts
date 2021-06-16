import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { TextboxComponent } from './textbox.component';

@NgModule({
  declarations: [TextboxComponent],
  exports: [TextboxComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
})
export class TextboxModule {}
