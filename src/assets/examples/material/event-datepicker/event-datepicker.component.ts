import { OnInit } from '@angular/core';
import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-event-datepicker',
  templateUrl: './event-datepicker.component.html',
  styleUrls: ['./event-datepicker.component.scss']
})
export class EventDatepickerComponent implements OnInit {

  events: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}
