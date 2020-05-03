import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TablesRoutes } from './tables.routing';
import { MaterialTableComponent } from './material-table/material-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxDatatableModule,
    RouterModule.forChild(TablesRoutes)
  ],
  declarations: [MaterialTableComponent]
})
export class TablesModule { }
