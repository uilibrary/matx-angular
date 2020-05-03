import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-changing-tooltip',
  templateUrl: './changing-tooltip.component.html',
  styleUrls: ['./changing-tooltip.component.scss']
})
export class ChangingTooltipComponent implements OnInit {

  message = new FormControl('Info about the action');
  
  constructor() { }

  ngOnInit() {
  }

}
