import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponentsRoutingModule } from './material-components-routing.module';
import { MatKitsComponent } from './mat-kits/mat-kits.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';


@NgModule({
  declarations: [MatKitsComponent],
  imports: [
  CommonModule,
    SharedMaterialModule,
    MaterialComponentsRoutingModule
  ]
})
export class MaterialComponentsModule { }
