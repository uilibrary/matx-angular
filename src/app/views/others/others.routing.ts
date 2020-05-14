import { Routes } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { config } from 'config';
import { UserRoleGuard } from '../../shared/guards/user-role.guard';


export const OthersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'blank',
      canActivate: [UserRoleGuard],
      component: AppBlankComponent,
      data: { title: 'Blank', breadcrumb: 'Blank', roles: config.authRoles.sa }
    }]
  }
];