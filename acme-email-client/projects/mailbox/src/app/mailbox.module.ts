import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MAILBOX_ROUTES } from './app.routes';
import { MailboxHomeComponent } from './mailbox-home/mailbox-home.component';

@NgModule({
  declarations: [
    MailboxHomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MAILBOX_ROUTES),
  ],
  providers: [],
})
export class MailboxModule { }
