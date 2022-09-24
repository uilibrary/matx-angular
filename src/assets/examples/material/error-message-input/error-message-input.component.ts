import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-error-message-input',
  templateUrl: './error-message-input.component.html',
  styleUrls: ['./error-message-input.component.scss']
})
export class ErrorMessageInputComponent implements OnInit {

  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit() {
  }

}
