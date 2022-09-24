import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontSizeDirective } from './font-size.directive';
import { ScrollToDirective } from './scroll-to.directive';
import { AppDropdownDirective } from './dropdown.directive';
import { DropdownAnchorDirective } from './dropdown-anchor.directive';
import { DropdownLinkDirective } from './dropdown-link.directive';
import { MatxSideNavToggleDirective } from './matx-side-nav-toggle.directive';
import { MatxSidenavHelperDirective, MatxSidenavTogglerDirective } from './matx-sidenav-helper/matx-sidenav-helper.directive';
import { MatxHighlightDirective } from './matx-highlight.directive';
import { AutoFocusDirective } from './auto-focus.directive';


const directives = [
  AutoFocusDirective,
  FontSizeDirective,
  ScrollToDirective,
  AppDropdownDirective,
  DropdownAnchorDirective,
  DropdownLinkDirective,
  MatxSideNavToggleDirective,
  MatxSidenavHelperDirective,
  MatxSidenavTogglerDirective,
  MatxHighlightDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule {}