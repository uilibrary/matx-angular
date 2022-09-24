import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-delay-tooltip',
  templateUrl: './delay-tooltip.component.html',
  styleUrls: ['./delay-tooltip.component.scss']
})
export class DelayTooltipComponent implements OnInit {

  showDelay = new UntypedFormControl(1000);
  hideDelay = new UntypedFormControl(2000);
  
  constructor() { }

  ngOnInit() {
  }

}
