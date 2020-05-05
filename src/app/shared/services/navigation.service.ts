import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [
    
    {
      name: "Dashboard",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard/analytics"
    },
    {
      name: "PAGES",
      type: "separator"
    },
    {
      name: "Sessions",
      type: "dropDown",
      tooltip: "Pages",
      icon: "how_to_reg",
      state: "sessions",
      badges: [{color: 'primary', value: '6'}],
      sub: [
        { name: "Sign up", state: "signup" },
        { name: "Sign in", state: "signin" },
        { name: "Forgot", state: "forgot-password" },
        { name: "Lock screen", state: "lockscreen" },
        { name: "Not Found", state: "404" },
        { name: "Error", state: "error" }
      ]
    },
    {
      name: "Blank Page",
      type: "link",
      icon: "check_box_outline_blank",
      state: "pages/blank"
    },
    {
      name: "COMPONENTS",
      type: "separator"
    },
    {
      name: "Forms",
      type: "dropDown",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      sub: [
        { name: "Basic", state: "basic" },
        { name: "Editor", state: "editor" },
        { name: "Upload", state: "upload" },
        { name: "Wizard", state: "wizard" }
      ]
    },
    {
      name: "Data Table",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables/mat-table"
    },
    {
      name: "Material Kit",
      type: "link",
      icon: "move_to_inbox",
      state: "mat-kits"
    },
    {
      name: "OTHERS",
      type: "separator"
    },
    {
      name: "Icons",
      type: "link",
      tooltip: "Material Icons",
      icon: "store",
      state: "icons"
    },
    {
      name: "Multi Level",
      type: "dropDown",
      tooltip: "Multi Level",
      icon: "format_align_center",
      state: "",
      sub: [
        {
          name: "Level Two",
          type: "dropDown",
          state: "fake-1",
          sub: [
            { name: "Level Three", state: "fake-2" },
            { name: "Level Three", state: "fake-3" }
          ]
        },
        { name: "Level Two", state: "fake-4" },
        { name: "Level Two", state: "fake-5" }
      ]
    },
    {
      name: "Documentation",
      type: "extLink",
      icon: "library_books",
      state: "http://demos.ui-lib.com/matx-angular-doc/"
    },
    {
      name: "Upgrade to PRO",
      type: "extLink",
      icon: "present_to_all",
      state: "http://matx-angular.ui-lib.com"
    }
  ];


  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    this.menuItems.next(this.iconMenu);
  }
}
