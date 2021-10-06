import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ErrorDialogComponent } from './error-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, ButtonModule, DialogModule, DynamicDialogModule],
  exports: [ErrorDialogComponent],
})
export class ErrorDialogModule {}
