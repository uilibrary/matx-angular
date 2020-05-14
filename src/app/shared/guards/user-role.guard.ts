import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { JwtAuthService } from "../services/auth/jwt-auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(
    private jwtAuth: JwtAuthService,
    private snack: MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var user = this.jwtAuth.getUser();

    if (route?.data?.roles?.includes(user.role)) {
      return true;
    } else {
      this.snack.open("You do not have access to this page!", "View Documentaion")
      .onAction()
      .subscribe(() => {
        window.open('http://demos.ui-lib.com/matx-angular-doc/authentication.html', '_blank');
      });
      return false;
    }
  }
}
