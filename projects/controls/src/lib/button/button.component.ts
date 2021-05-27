import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'primary' | 'flat' | 'stroked' | 'icon' | 'fab' | 'mini-fab';
  @Input() ngClass: string[] = [];
  @Input() id: string;

  @Output() clicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleOnClick(): void {
    this.clicked.emit();
  }
}
