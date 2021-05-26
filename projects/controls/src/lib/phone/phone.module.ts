import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhoneComponent],
  imports: [CommonModule, FormsModule],
  exports: [PhoneComponent],
})
export class PhoneModule {}
