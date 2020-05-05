import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-ripples',
  templateUrl: './custom-ripples.component.html',
  styleUrls: ['./custom-ripples.component.scss']
})
export class CustomRipplesComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  
  constructor() { }

  ngOnInit() {
  }

}
