import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { CustomValidators } from "ngx-custom-validators";
import { matxAnimations } from "app/shared/animations/matx-animations";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  animations: matxAnimations
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const password = new FormControl("", Validators.required);
    const confirmPassword = new FormControl(
      "",
      CustomValidators.equalTo(password)
    );

    this.signupForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: password,
      agreed: [false, Validators.required]
    });
  }

  onSubmit() {
    if (!this.signupForm.invalid) {
      // do what you wnat with your data
      console.log(this.signupForm.value);
    }
  }
}
