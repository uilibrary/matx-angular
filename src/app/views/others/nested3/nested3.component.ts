import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nested3',
  templateUrl: './nested3.component.html',
  styleUrls: ['./nested3.component.scss']
})
export class Nested3Component implements OnInit {

  constructor(
    public r: Router
  ) { }

  ngOnInit() {
  }
  go() {
    this.r.navigate(['/dashboard'])
  }
}
