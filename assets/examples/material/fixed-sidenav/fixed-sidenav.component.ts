import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fixed-sidenav',
  templateUrl: './fixed-sidenav.component.html',
  styleUrls: ['./fixed-sidenav.component.scss']
})
export class FixedSidenavComponent implements OnInit {
  
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit() {
  }

}
