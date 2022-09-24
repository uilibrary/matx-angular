import { Routes } from "@angular/router";

import { AnalyticsComponent } from "./analytics/analytics.component";

export const DashboardRoutes: Routes = [
  {
    path: "analytics",
    component: AnalyticsComponent,
    data: { title: 'Analytics', breadcrumb: 'Analytics'}
  }
];
