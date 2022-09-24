import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-trigger-select',
  templateUrl: './trigger-select.component.html',
  styleUrls: ['./trigger-select.component.scss']
})
export class TriggerSelectComponent implements OnInit {

  toppings = new UntypedFormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  constructor() { }

  ngOnInit() {
  }

}
