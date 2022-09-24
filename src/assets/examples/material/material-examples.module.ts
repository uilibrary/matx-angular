import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_EXAMPLE_COMPONENT_LIST } from '.';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';

@NgModule({
  declarations: [...MATERIAL_EXAMPLE_COMPONENT_LIST],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    SharedMaterialModule
  ],
  exports: [...MATERIAL_EXAMPLE_COMPONENT_LIST],
  // entryComponents: [...MATERIAL_EXAMPLE_COMPONENT_LIST]
})
export class MaterialExamplesModule { }
