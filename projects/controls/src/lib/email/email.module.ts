import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule, FormsModule],
  exports: [EmailComponent],
})
export class EmailModule {}
