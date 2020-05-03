import { Routes } from '@angular/router';
import { MaterialTableComponent } from './material-table/material-table.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'mat-table',
      component: MaterialTableComponent,
      data: { title: 'Material TAble', breadcrumb: 'Material Table' }
    }]
  }
];
