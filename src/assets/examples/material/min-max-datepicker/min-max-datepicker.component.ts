import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-max-datepicker',
  templateUrl: './min-max-datepicker.component.html',
  styleUrls: ['./min-max-datepicker.component.scss']
})
export class MinMaxDatepickerComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  
  constructor() { }

  ngOnInit() {
  }

}
