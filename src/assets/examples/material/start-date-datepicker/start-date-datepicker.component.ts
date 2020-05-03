import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-date-datepicker',
  templateUrl: './start-date-datepicker.component.html',
  styleUrls: ['./start-date-datepicker.component.scss']
})
export class StartDateDatepickerComponent implements OnInit {

  startDate = new Date(1990, 0, 1);
    
  constructor() { }

  ngOnInit() {
  }

}
