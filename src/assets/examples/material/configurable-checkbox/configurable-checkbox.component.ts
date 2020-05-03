import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurable-checkbox',
  templateUrl: './configurable-checkbox.component.html',
  styleUrls: ['./configurable-checkbox.component.scss']
})
export class ConfigurableCheckboxComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  
  constructor() { }

  ngOnInit() {
  }

}
