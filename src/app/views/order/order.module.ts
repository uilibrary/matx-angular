import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { OrderCostListComponent } from "./order-cost-list/order-cost-list.component";
import { SharedMaterialModule } from "app/shared/shared-material.module";

@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    OrderCostListComponent
  ],
  imports: [CommonModule, SharedMaterialModule, OrderRoutingModule]
})
export class OrderModule {}
