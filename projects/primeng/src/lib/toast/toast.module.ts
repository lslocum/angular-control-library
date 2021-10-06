import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule as PrimeToastModule } from 'primeng/toast';
import { DialogService } from 'primeng/dynamicdialog';

import { ToastComponent } from './toast.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, FormsModule, PrimeToastModule],
  exports: [ToastComponent],
  providers: [ConfirmationService, DialogService, MessageService],
})
export class ToastModule {}
