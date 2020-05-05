import { Injectable, Renderer2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { getQueryParam } from "../helpers/url.helper";
import { ThemeService } from "./theme.service";

export interface ILayoutConf {
  navigationPos?: string; // side
  sidebarStyle?: string; // full, compact, closed
  sidebarCompactToggle?: boolean; // sidebar expandable on hover
  sidebarColor?: string; // Sidebar background color http://demos.ui-lib.com/matx-doc/#matx-colors
  isMobile?: boolean; // updated automatically
  useBreadcrumb?: boolean; // Breadcrumb enabled/disabled
  breadcrumb?: string; // simple, title
  topbarFixed?: boolean; // Fixed header
  footerFixed?: boolean; // Fixed Footer
  topbarColor?: string; // Header background color http://demos.ui-lib.com/matx-doc/#matx-colors
  footerColor?: string; // Header background color http://demos.ui-lib.com/matx-doc/#matx-colors
  matTheme?: string; // material theme. matx-blue, matx-navy, matx-dark-purple, matx-dark-pink
  perfectScrollbar?: boolean;
}
export interface ILayoutChangeOptions {
  duration?: number;
  transitionClass?: boolean;
}
interface IAdjustScreenOptions {
  browserEvent?: any;
  route?: string;
}

@Injectable({
  providedIn: "root"
})
export class LayoutService {
  public layoutConf: ILayoutConf;
  layoutConfSubject = new BehaviorSubject<ILayoutConf>(this.layoutConf);
  layoutConf$ = this.layoutConfSubject.asObservable();
  public isMobile: boolean;
  public currentRoute: string;
  public fullWidthRoutes = [];

  constructor(private themeService: ThemeService) {
    this.setAppLayout(
      //******** SET YOUR LAYOUT OPTIONS HERE *********
      {
        navigationPos: "side",
        sidebarStyle: "full", // full, compact, closed
        sidebarColor: "slate", // http://demos.ui-lib.com/matx-doc/#matx-colors
        sidebarCompactToggle: false, // applied when "sidebarStyle" is "compact"
        useBreadcrumb: true,
        footerFixed: true,
        topbarColor: "purple", // http://demos.ui-lib.com/matx-doc/#matx-colors
        footerColor: "slate", // http://demos.ui-lib.com/matx-doc/#matx-colors
        matTheme: "matx-light-purple", // matx-blue, matx-navy, matx-light-purple, matx-dark-purple, matx-dark-pink
        breadcrumb: "simple", // simple, title
        perfectScrollbar: true
      }
    );    
  }

  setAppLayout(layoutConf: ILayoutConf) {
    this.layoutConf = { ...this.layoutConf, ...layoutConf };
    this.applyMatTheme(this.layoutConf.matTheme);

    //******* Only for demo purpose ***
    this.setLayoutFromQuery();
    //**********************
  }

  publishLayoutChange(lc: ILayoutConf, opt: ILayoutChangeOptions = {}) {
    if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
      this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
    }

    this.layoutConf = Object.assign(this.layoutConf, lc);
    this.layoutConfSubject.next(this.layoutConf);
  }

  applyMatTheme(theme) {
    this.themeService.applyMatTheme(this.layoutConf.matTheme);
  }

  setLayoutFromQuery() {
    let layoutConfString = getQueryParam("layout");
    let prevTheme = this.layoutConf.matTheme;
    try {
      this.layoutConf = JSON.parse(layoutConfString);
      this.themeService.changeTheme(prevTheme, this.layoutConf.matTheme);
    } catch (e) {}
  }

  adjustLayout(options: IAdjustScreenOptions = {}) {
    let sidebarStyle: string;
    this.isMobile = this.isSm();
    this.currentRoute = options.route || this.currentRoute;
    sidebarStyle = this.isMobile ? "closed" : "full";

    if (this.currentRoute) {
      this.fullWidthRoutes.forEach(route => {
        if (this.currentRoute.indexOf(route) !== -1) {
          sidebarStyle = "closed";
        }
      });
    }

    this.publishLayoutChange({
      isMobile: this.isMobile,
      sidebarStyle: sidebarStyle
    });
  }
  isSm() {
    return window.matchMedia(`(max-width: 959px)`).matches;
  }
}
