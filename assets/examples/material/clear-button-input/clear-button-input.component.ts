import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-button-input',
  templateUrl: './clear-button-input.component.html',
  styleUrls: ['./clear-button-input.component.scss']
})
export class ClearButtonInputComponent implements OnInit {

  value = 'Clear me';
  
  constructor() { }

  ngOnInit() {
  }

}
