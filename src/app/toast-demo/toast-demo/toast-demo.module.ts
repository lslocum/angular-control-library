import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ToastModule } from 'projects/primeng/src/lib/toast/toast.module';
import { NotificationService } from 'projects/primeng/src/public-api';
import { ButtonModule } from 'primeng/button';
// import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ToastDemoRoutingModule } from './toast-demo-routing.module';
import { ToastDemoComponent } from './toast-demo.component';
import { FormsModule } from '@angular/forms';
import { BannerModule } from 'projects/primeng/src/public-api';

@NgModule({
  declarations: [ToastDemoComponent],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    BannerModule,
    ToastDemoRoutingModule,
    ConfirmDialogModule,
  ],
  providers: [NotificationService, MessageService],
})
export class ToastDemoModule {}
