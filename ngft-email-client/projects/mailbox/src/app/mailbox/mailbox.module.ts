import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailboxHomeComponent } from './mailbox-home/mailbox-home.component';
import { RouterModule, Routes } from '@angular/router';

export const MAILBOX_ROUTES: Routes = [
  {
    path: '',
    component: MailboxHomeComponent,
  }
];

@NgModule({
  declarations: [
    MailboxHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MAILBOX_ROUTES),
  ]
})
export class MailboxModule { }
