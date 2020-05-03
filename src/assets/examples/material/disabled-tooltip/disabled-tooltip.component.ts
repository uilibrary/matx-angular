import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-disabled-tooltip',
  templateUrl: './disabled-tooltip.component.html',
  styleUrls: ['./disabled-tooltip.component.scss']
})
export class DisabledTooltipComponent implements OnInit {

  disabled = new FormControl(false);
  
  constructor() { }

  ngOnInit() {
  }

}
