import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-select',
  templateUrl: './two-way-binding-select.component.html',
  styleUrls: ['./two-way-binding-select.component.scss']
})
export class TwoWayBindingSelectComponent implements OnInit {

  selected = 'option2';
  
  constructor() { }

  ngOnInit() {
  }

}
