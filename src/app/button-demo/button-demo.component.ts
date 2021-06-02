import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent implements OnInit {
  disabled = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('params', params);
    });
  }

  buttonClicked() {
    alert('🐱‍🏍🐱‍🚀🐱‍👓 Button Clicked 🐱‍🏍🐱‍🚀🐱‍👓');
  }

  toggleDisabled(value: boolean): void {
    this.disabled = value;
  }
}
