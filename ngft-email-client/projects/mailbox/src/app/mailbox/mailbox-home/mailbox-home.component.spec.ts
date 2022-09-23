import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxHomeComponent } from './mailbox-home.component';

describe('MailboxHomeComponent', () => {
  let component: MailboxHomeComponent;
  let fixture: ComponentFixture<MailboxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailboxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
