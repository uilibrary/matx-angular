import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-label-form-field',
  templateUrl: './label-form-field.component.html',
  styleUrls: ['./label-form-field.component.scss']
})
export class LabelFormFieldComponent {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

}
