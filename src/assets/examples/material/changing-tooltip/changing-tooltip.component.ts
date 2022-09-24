import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-changing-tooltip',
  templateUrl: './changing-tooltip.component.html',
  styleUrls: ['./changing-tooltip.component.scss']
})
export class ChangingTooltipComponent implements OnInit {

  message = new UntypedFormControl('Info about the action');
  
  constructor() { }

  ngOnInit() {
  }

}
