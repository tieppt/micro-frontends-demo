import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-mailbox-home',
  templateUrl: './mailbox-home.component.html',
  styleUrls: ['./mailbox-home.component.scss']
})
export class MailboxHomeComponent implements OnInit {
  emitEvent() {
    const evt = new CustomEvent('customEvent', {
      detail: {
        data: new Date()
      }
    });
    window.dispatchEvent(evt);
    (window as any).eventBus.next({state: new Date()})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
