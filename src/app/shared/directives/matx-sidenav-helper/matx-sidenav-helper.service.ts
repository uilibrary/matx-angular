import { Injectable } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Injectable({
  providedIn: "root"
})
export class MatXSidenavHelperService {
  sidenavList: MatSidenav[];

  constructor() {
    this.sidenavList = [];
  }

  setSidenav(id, sidenav): void {
    this.sidenavList[id] = sidenav;
  }

  getSidenav(id): any {
    return this.sidenavList[id];
  }
}
