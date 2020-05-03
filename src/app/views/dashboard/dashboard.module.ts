import { SharedMaterialModule } from "app/shared/shared-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";

import { DashboardRoutes } from "./dashboard.routing";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    ChartsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    SharedPipesModule,
    PerfectScrollbarModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [AnalyticsComponent],
  exports: []
})
export class DashboardModule {}
