import { Routes } from '@angular/router';
import { MailboxHomeComponent } from './mailbox-home/mailbox-home.component';

export const MAILBOX_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MailboxHomeComponent,
        pathMatch: 'full'
      },
    ]
  }
];

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mailbox',
  },
  {
    path: 'mailbox',
    loadChildren: () => import('./mailbox.module').then(m => m.MailboxModule)
  }
];
