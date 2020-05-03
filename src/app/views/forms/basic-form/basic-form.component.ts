import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from "ngx-custom-validators";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"]
})
export class BasicFormComponent implements OnInit {
  formData = {};
  console = console;
  basicForm: FormGroup;

  constructor() {}

  ngOnInit() {
    let password = new FormControl("", Validators.required);
    let confirmPassword = new FormControl(
      "",
      CustomValidators.equalTo(password)
    );

    this.basicForm = new FormGroup({
      username: new FormControl("", [
        Validators.minLength(4),
        Validators.maxLength(9)
      ]),
      firstname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      website: new FormControl("", CustomValidators.url),
      date: new FormControl(),
      cardno: new FormControl("", [CustomValidators.creditCard]),
      phone: new FormControl("", [Validators.required]),
      password: password,
      confirmPassword: confirmPassword,
      gender: new FormControl("", [Validators.required]),
      agreed: new FormControl("", (control: FormControl) => {
        const agreed = control.value;
        if (!agreed) {
          return { agreed: true };
        }
        return null;
      })
    });
  }
}
