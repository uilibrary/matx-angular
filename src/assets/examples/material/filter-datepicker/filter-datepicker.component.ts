import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-datepicker',
  templateUrl: './filter-datepicker.component.html',
  styleUrls: ['./filter-datepicker.component.scss']
})
export class FilterDatepickerComponent implements OnInit {

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
