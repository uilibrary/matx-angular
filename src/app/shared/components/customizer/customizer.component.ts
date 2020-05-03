import { Component, OnInit, Input, Renderer2 } from "@angular/core";
import { NavigationService } from "../../../shared/services/navigation.service";
import { LayoutService } from "../../../shared/services/layout.service";
import PerfectScrollbar from "perfect-scrollbar";
import { CustomizerService } from "app/shared/services/customizer.service";
import { ThemeService, ITheme } from "app/shared/services/theme.service";

@Component({
  selector: "app-customizer",
  templateUrl: "./customizer.component.html",
  styleUrls: ["./customizer.component.scss"]
})
export class CustomizerComponent implements OnInit {
  isCustomizerOpen: boolean = false;
  // viewMode: 'options' | 'json' | 'demos' = 'demos';
  sidenavTypes = [
    {
      name: "Default Menu",
      value: "default-menu"
    },
    {
      name: "Separator Menu",
      value: "separator-menu"
    },
    {
      name: "Icon Menu",
      value: "icon-menu"
    }
  ];
  sidebarColors: any[];
  topbarColors: any[];

  layoutConf;
  selectedMenu: string = "icon-menu";
  selectedLayout: string;
  isTopbarFixed = false;
  isFooterFixed = false;
  isRTL = false;
  matxThemes: ITheme[];
  perfectScrollbarEnabled: boolean = true;

  constructor(
    private navService: NavigationService,
    public layout: LayoutService,
    private themeService: ThemeService,
    public customizer: CustomizerService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.layoutConf = this.layout.layoutConf;
    this.selectedLayout = this.layoutConf.navigationPos;
    this.isTopbarFixed = this.layoutConf.topbarFixed;
    this.isRTL = this.layoutConf.dir === "rtl";
    this.matxThemes = this.themeService.matxThemes;
  }
  changeTheme(theme) {
    // this.themeService.changeTheme(theme);
    this.layout.publishLayoutChange({matTheme: theme.name})
  }
  changeLayoutStyle(data) {
    this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
  }
  changeSidenav(data) {
    this.navService.publishNavigationChange(data.value);
  }
  toggleBreadcrumb(data) {
    this.layout.publishLayoutChange({ useBreadcrumb: data.checked });
  }
  toggleTopbarFixed(data) {
    this.layout.publishLayoutChange({ topbarFixed: data.checked });
  }
  toggleDir(data) {
    
  }
  tooglePerfectScrollbar(data) {
    this.layout.publishLayoutChange({perfectScrollbar: this.perfectScrollbarEnabled})
  }
  
}
