import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderCostListComponent } from "./order-cost-list/order-cost-list.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { OrderListComponent } from "./order-list/order-list.component";

const routes: Routes = [
  {
    path: "",
    component: OrderListComponent
  },
  {
    path: ":id",
    data: { title: "Order Details", breadcrumb: "Order id: {{id}}" },
    children: [
      {
        path: "",
        component: OrderDetailComponent
      },
      {
        path: "costs",
        component: OrderCostListComponent,
        data: { title: "Costs", breadcrumb: "Costs" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
