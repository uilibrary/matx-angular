import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacingComponent } from './spacing/spacing.component';
import { BorderComponent } from './border/border.component';
import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
  {
    path: 'spacing',
    component: SpacingComponent
  },
  {
    path: 'border',
    component: BorderComponent
  },
  {
    path: 'color',
    component: ColorsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
