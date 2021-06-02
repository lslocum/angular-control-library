import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {
  disabled = false;

  buttonClicked() {
    alert('🐱‍🏍🐱‍🚀🐱‍👓 Button Clicked 🐱‍🏍🐱‍🚀🐱‍👓');
  }

  toggleDisabled(value: boolean): void{
    this.disabled = value;
  }
}
