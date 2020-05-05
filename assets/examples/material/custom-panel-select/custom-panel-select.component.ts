import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-custom-panel-select',
  templateUrl: './custom-panel-select.component.html',
  styleUrls: ['./custom-panel-select.component.scss'],
    // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class CustomPanelSelectComponent implements OnInit {

  panelColor = new FormControl('red');
  
  constructor() { }

  ngOnInit() {
  }

}
