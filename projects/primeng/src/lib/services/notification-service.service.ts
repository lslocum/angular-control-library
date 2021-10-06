import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  showErrorMessage(title?: string, message?: string) {
    this.openDialog(ErrorDialogComponent, {
      header: 'Error',
      data: { title, message: message ? message : `An error has occurred. Please try again.` },
      width: '50%',
    });
  }

  showWarningMessage(notification: Notification) {
    this.openConfirmDialog(notification);
  }

  showInformationalMessage(notification: Notification) {
    this.openBanner({ ...notification, severity: 'info' });
  }

  showSuccessMessage(notification: Notification) {
    return this.pushToast({
      ...notification,
      severity: 'success',
      title: notification.title ? notification.title : 'Success',
    });
  }

  private openDialog(component: any, config: DynamicDialogConfig) {
    return this.dialogService.open(component, {
      ...config,
      width: config.width ?? '70%',
      contentStyle: config.contentStyle ?? { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    }).onClose;
  }

  private openConfirmDialog(notification: Notification) {
    const defaultAcceptFunction = () =>
      this.pushToast(
        confirmNotification.acceptMessage
          ? confirmNotification.acceptMessage
          : { severity: 'info', title: 'Confirmed', message: 'You have accepted' }
      );

    const defaultRejectFunction = () =>
      this.pushToast(
        confirmNotification.rejectMessage
          ? confirmNotification.rejectMessage
          : { severity: 'info', title: 'Rejected', message: 'You have rejected' }
      );

    const confirmNotification = {
      ...notification,
      header: notification.title ? notification.title : 'Warning',
      icon: 'pi pi-exclamation-triangle',
      accept: notification.acceptCallback ?? defaultAcceptFunction,
      reject: notification.rejectCallback ?? defaultRejectFunction,
    };

    this.confirmationService.confirm(confirmNotification);
  }

  private pushToast(notification: Notification) {
    this.messageService.add({
      detail: notification.message,
      severity: notification.severity,
      summary: notification.title,
      life: 5000,
    });
  }

  private openBanner(notification: Notification) {console.log('open banner')
    this.messageService.add({
      detail: notification.message,
      severity: notification.severity,
      summary: notification.title,
    });
  }
}

export interface Notification {
  message: string;
  title?: string;
  severity?: 'success' | 'error' | 'warn' | 'info';
  displayOverride?: 'banner' | 'toast' | 'confirm' | 'dialog';
  acceptCallback?: (notification) => void;
  rejectCallback?: (notification) => void;
  acceptMessage?: Notification;
  rejectMessage?: Notification;
}
