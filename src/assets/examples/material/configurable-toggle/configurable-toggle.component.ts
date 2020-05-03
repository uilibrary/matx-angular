import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurable-toggle',
  templateUrl: './configurable-toggle.component.html',
  styleUrls: ['./configurable-toggle.component.scss']
})
export class ConfigurableToggleComponent implements OnInit {
  color;
  checked;
  disabled;
  
  constructor() { }

  ngOnInit() {
  }

}
