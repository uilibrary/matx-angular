import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "ngx-custom-validators";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
  animations: matxAnimations
})
export class SigninComponent implements OnInit, AfterViewInit {
  signinForm: FormGroup;
  errorMsg = '';
  return: string;
  loading: Boolean;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private jwtAuth: JwtAuthService,
    private matxLoader: AppLoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('Watson', Validators.required),
      password: new FormControl('12345678', Validators.required),
      rememberMe: new FormControl(true)
    });

    this.route.queryParams
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(params => this.return = params['return'] || '/');
  }

  ngAfterViewInit() {
    // setTimeout(() => {
      this.autoSignIn();
    // })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  signin() {
    const signinData = this.signinForm.value
    this.loading = true;
    this.jwtAuth.signin(signinData.username, signinData.password)
    .subscribe(response => {
      this.loading = false;
      this.router.navigateByUrl(this.return);
    }, err => {
      this.loading = false;
      this.errorMsg = err.message;
    })
  }

  autoSignIn() {    
    if(this.return === '/') {
      return
    }
    this.matxLoader.open(`Automatically Signing you in! \n Return url: ${this.return.substring(0, 20)}...`, {width: '320px'});
    setTimeout(() => {
      this.signin();
      console.log('autoSignIn');
      this.matxLoader.close()
    }, 2000);
  }
}
