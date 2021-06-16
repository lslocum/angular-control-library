import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, FormsModule, DropdownModule],
  exports: [SelectComponent],
})
export class SelectModule {}
