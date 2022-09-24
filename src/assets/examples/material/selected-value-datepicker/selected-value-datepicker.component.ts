import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-selected-value-datepicker',
  templateUrl: './selected-value-datepicker.component.html',
  styleUrls: ['./selected-value-datepicker.component.scss']
})
export class SelectedValueDatepickerComponent {

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());

  constructor() { }


}
