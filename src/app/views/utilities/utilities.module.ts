import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HighlightModule } from 'ngx-highlightjs';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { SpacingComponent } from './spacing/spacing.component';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BorderComponent } from './border/border.component';
import { TypographyComponent } from './typography/typography.component';
import { SharedDirectivesModule } from 'app/shared/directives/shared-directives.module';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
  declarations: [SpacingComponent, BorderComponent, TypographyComponent, ColorsComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    SharedDirectivesModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
