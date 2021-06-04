import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [EmailComponent],
})
export class EmailModule {}
