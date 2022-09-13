import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cld-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (window as any).eventBus.subscribe((e: any) => console.log('subject', e));
  }

}
