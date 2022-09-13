import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'acme-email-client';
  ngOnInit(): void {
    window.addEventListener('customEvent', e => console.log(e));
    (window as any).eventBus = new BehaviorSubject({
      state: 0
    });
  }
}
