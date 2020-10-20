import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { CALENDAR_ROUTES } from './calendar.routes';


@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ],
  providers: [],
})
export class CalendarModule { }

