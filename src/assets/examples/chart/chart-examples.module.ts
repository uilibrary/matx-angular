import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHART_EXAMPLE_COMPONENT_LIST } from '.';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [...CHART_EXAMPLE_COMPONENT_LIST],
  imports: [
    NgxEchartsModule.forRoot({
      echarts
    }),
    CommonModule,
    SharedMaterialModule
  ],
  exports: [...CHART_EXAMPLE_COMPONENT_LIST],
  // entryComponents: [...CHART_EXAMPLE_COMPONENT_LIST]
})
export class ChartExamplesModule { }
