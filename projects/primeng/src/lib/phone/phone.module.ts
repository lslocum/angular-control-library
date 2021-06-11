import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [PhoneComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
  exports: [PhoneComponent],
})
export class PhoneModule {}
