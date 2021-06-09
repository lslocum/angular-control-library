import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule as PrimeNgButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, PrimeNgButtonModule, RippleModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
