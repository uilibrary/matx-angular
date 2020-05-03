import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontSizeDirective } from './font-size.directive';
import { ScrollToDirective } from './scroll-to.directive';
import { AppDropdownDirective } from './dropdown.directive';
import { DropdownAnchorDirective } from './dropdown-anchor.directive';
import { DropdownLinkDirective } from './dropdown-link.directive';
import { MatXSideNavToggleDirective } from './matx-side-nav-toggle.directive';
import { MatXSidenavHelperDirective, MatXSidenavTogglerDirective } from './matx-sidenav-helper/matx-sidenav-helper.directive';
import { MatXHighlightDirective } from './matx-highlight.directive';


const directives = [
  FontSizeDirective,
  ScrollToDirective,
  AppDropdownDirective,
  DropdownAnchorDirective,
  DropdownLinkDirective,
  MatXSideNavToggleDirective,
  MatXSidenavHelperDirective,
  MatXSidenavTogglerDirective,
  MatXHighlightDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule {}