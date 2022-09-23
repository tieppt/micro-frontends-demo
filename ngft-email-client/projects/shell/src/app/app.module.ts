import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'mailbox',
    loadChildren: () => import('mailbox/MailboxModule').then(m => m.MailboxModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('calendar/CalendarModule').then(m => m.CalendarModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
