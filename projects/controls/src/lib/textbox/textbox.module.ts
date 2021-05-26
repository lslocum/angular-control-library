import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextboxComponent],
  exports: [TextboxComponent],
  imports: [CommonModule, FormsModule],
})
export class TextboxModule {}
