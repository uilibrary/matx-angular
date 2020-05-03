import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-basic-select',
  templateUrl: './basic-select.component.html',
  styleUrls: ['./basic-select.component.scss']
})
export class BasicSelectComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
