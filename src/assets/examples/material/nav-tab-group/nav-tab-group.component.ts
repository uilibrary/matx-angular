import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tab-group',
  templateUrl: './nav-tab-group.component.html',
  styleUrls: ['./nav-tab-group.component.scss']
})
export class NavTabGroupComponent implements OnInit {

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
  
  constructor() { }

  ngOnInit() {
  }

}
