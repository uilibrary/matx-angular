import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-theming-form-field',
  templateUrl: './theming-form-field.component.html',
  styleUrls: ['./theming-form-field.component.scss']
})
export class ThemingFormFieldComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  ngOnInit() {
  }

}
