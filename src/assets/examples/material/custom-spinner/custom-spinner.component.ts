import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.scss']
})
export class CustomSpinnerComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  
  constructor() { }

  ngOnInit() {
  }

}
