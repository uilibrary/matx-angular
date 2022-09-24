import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-feature-select',
  templateUrl: './feature-select.component.html',
  styleUrls: ['./feature-select.component.scss']
})
export class FeatureSelectComponent implements OnInit {

  animalControl = new UntypedFormControl('', [Validators.required]);
  selectFormControl = new UntypedFormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
