import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-demo',
  templateUrl: './banner-demo.component.html',
  styleUrls: ['./banner-demo.component.scss'],
})
export class BannerDemoComponent {
  message = [{ detail: 'Hello', summary: 'Success', severity: 'success' }, { detail: 'Goodbye', summary: 'Warn', severity: 'warn' }];

  constructor() {}
}
