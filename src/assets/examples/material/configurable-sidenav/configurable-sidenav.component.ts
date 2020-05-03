import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurable-sidenav',
  templateUrl: './configurable-sidenav.component.html',
  styleUrls: ['./configurable-sidenav.component.scss']
})
export class ConfigurableSidenavComponent implements OnInit {

  mode = new FormControl('over');

  constructor() { }

  ngOnInit() {
  }

}
