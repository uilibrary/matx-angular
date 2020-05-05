import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-error-form-field",
  templateUrl: "./error-form-field.component.html",
  styleUrls: ["./error-form-field.component.scss"]
})
export class ErrorFormFieldComponent implements OnInit {
  email = new FormControl("", [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit() {}

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
}
