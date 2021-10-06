import { Component, Input } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'prime-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  @Input() message: Message[];
}
