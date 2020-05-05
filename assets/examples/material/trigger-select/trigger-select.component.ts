import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-trigger-select',
  templateUrl: './trigger-select.component.html',
  styleUrls: ['./trigger-select.component.scss']
})
export class TriggerSelectComponent implements OnInit {

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  constructor() { }

  ngOnInit() {
  }

}
