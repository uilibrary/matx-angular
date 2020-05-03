import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-disabled-select',
  templateUrl: './disabled-select.component.html',
  styleUrls: ['./disabled-select.component.scss']
})
export class DisabledSelectComponent implements OnInit {

  disableSelect = new FormControl(false);
  
  constructor() { }

  ngOnInit() {
  }

}
