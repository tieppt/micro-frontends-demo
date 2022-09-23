import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';

export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: CalendarHomeComponent,
  }
];

@NgModule({
  declarations: [
    CalendarHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ]
})
export class CalendarModule { }
