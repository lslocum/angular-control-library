import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
})
export class ButtonDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  buttonClicked() {
    alert('🐱‍🏍🐱‍🚀🐱‍👓 Button Clicked 🐱‍🏍🐱‍🚀🐱‍👓');
  }
}
