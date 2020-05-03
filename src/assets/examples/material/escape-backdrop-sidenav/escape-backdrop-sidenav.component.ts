import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-escape-backdrop-sidenav',
  templateUrl: './escape-backdrop-sidenav.component.html',
  styleUrls: ['./escape-backdrop-sidenav.component.scss']
})
export class EscapeBackdropSidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  
  constructor() { }

  ngOnInit() {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }



}
