import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./shared/guards/auth.guard";

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "/dashboard/analytics",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
        data: { title: "Session" },
      },
    ],
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "mat-kits",
        loadChildren: () =>
          import("./views/material-components/material-components.module").then(
            (m) => m.MaterialComponentsModule
          ),
        data: { title: "Material Coponents", breadcrumb: "Material Coponents" },
      },
      {
        path: "pages",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
        data: { title: "Pages", breadcrumb: "Pages" },
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./views/tables/tables.module").then((m) => m.TablesModule),
        data: { title: "Tables", breadcrumb: "Tables" },
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./views/forms/forms.module").then((m) => m.AppFormsModule),
        data: { title: "Forms", breadcrumb: "Forms" },
      },

      {
        path: "search",
        loadChildren: () =>
          import("./views/search-view/search-view.module").then(
            (m) => m.SearchViewModule
          ),
      },

      {
        path: "orders",
        loadChildren: () =>
          import("./views/order/order.module").then((m) => m.OrderModule),
        data: { title: "Orders", breadcrumb: "Orders" },
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/mat-icons/mat-icons.module").then(
            (m) => m.MatIconsModule
          ),
        data: { title: "Icons", breadcrumb: "Mat icons" },
      },
    ],
  },
  {
    path: "**",
    redirectTo: "sessions/404",
  },
];
