import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [PasswordComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
  exports: [PasswordComponent],
})
export class PasswordModule {}
