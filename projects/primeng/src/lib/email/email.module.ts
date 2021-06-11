import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { EmailComponent } from './email.component';

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
  exports: [EmailComponent],
})
export class EmailModule {}
