import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-label-form-field',
  templateUrl: './label-form-field.component.html',
  styleUrls: ['./label-form-field.component.scss']
})
export class LabelFormFieldComponent {

  options: UntypedFormGroup;

  constructor(fb: UntypedFormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

}
