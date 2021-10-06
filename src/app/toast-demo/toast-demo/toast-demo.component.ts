import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { NotificationService } from 'projects/primeng/src/public-api';

@Component({
  selector: 'app-toast-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss'],
})
export class ToastDemoComponent implements OnInit {
  message = 'Hello';

  constructor(private notificationService: NotificationService, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  showInformation() {
    this.notificationService.showInformationalMessage({ message: this.message, title: 'Report Generated' });
  }

  showSuccess() {
    this.notificationService.showSuccessMessage({ message: this.message, title: 'Report Generated' });
  }

  showConfirm() {
    this.notificationService.showWarningMessage({
      message: 'Are you sure you want to delete this user?',
      acceptMessage: { message: 'User will be deleted', severity: 'warn' },
      rejectMessage: { message: 'User will remain', severity: 'success' },
    });
  }

  showError() {
    this.notificationService.showErrorMessage('User not found!');
  }
}
