import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule as PrimePasswordModule } from 'primeng/password';

import { PasswordComponent } from './password.component';

@NgModule({
  declarations: [PasswordComponent],
  imports: [CommonModule, FormsModule, PrimePasswordModule],
  exports: [PasswordComponent],
})
export class PasswordModule {}
