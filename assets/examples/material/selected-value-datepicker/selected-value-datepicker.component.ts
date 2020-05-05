import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-selected-value-datepicker',
  templateUrl: './selected-value-datepicker.component.html',
  styleUrls: ['./selected-value-datepicker.component.scss']
})
export class SelectedValueDatepickerComponent {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor() { }


}
