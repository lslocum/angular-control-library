import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule as PrimeCheckboxModule } from 'primeng/checkbox';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, FormsModule, PrimeCheckboxModule],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}
