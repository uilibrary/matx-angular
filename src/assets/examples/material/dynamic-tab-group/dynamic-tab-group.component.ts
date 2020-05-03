import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dynamic-tab-group',
  templateUrl: './dynamic-tab-group.component.html',
  styleUrls: ['./dynamic-tab-group.component.scss']
})
export class DynamicTabGroupComponent implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  constructor() { }

  ngOnInit() {
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
