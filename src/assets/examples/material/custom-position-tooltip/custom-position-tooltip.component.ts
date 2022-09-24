import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-custom-position-tooltip',
  templateUrl: './custom-position-tooltip.component.html',
  styleUrls: ['./custom-position-tooltip.component.scss']
})
export class CustomPositionTooltipComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new UntypedFormControl(this.positionOptions[0]);
  
  constructor() { }

  ngOnInit() {
  }

}
