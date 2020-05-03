import { Routes } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';


export const OthersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'blank',
      component: AppBlankComponent,
      data: { title: 'Blank', breadcrumb: 'Blank' }
    }]
  }
];