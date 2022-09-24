import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-disabled-select',
  templateUrl: './disabled-select.component.html',
  styleUrls: ['./disabled-select.component.scss']
})
export class DisabledSelectComponent implements OnInit {

  disableSelect = new UntypedFormControl(false);
  
  constructor() { }

  ngOnInit() {
  }

}
