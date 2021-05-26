import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDemoComponent } from './email-demo.component';

describe('EmailDemoComponent', () => {
  let component: EmailDemoComponent;
  let fixture: ComponentFixture<EmailDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
