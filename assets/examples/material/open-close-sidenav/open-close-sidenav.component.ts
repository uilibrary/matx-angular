import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close-sidenav',
  templateUrl: './open-close-sidenav.component.html',
  styleUrls: ['./open-close-sidenav.component.scss']
})
export class OpenCloseSidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
