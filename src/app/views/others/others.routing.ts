import { Routes } from '@angular/router';

import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { AppPricingComponent } from './app-pricing/app-pricing.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { Nested1Component } from './nested1/nested1.component';
import { Nested2Component } from './nested2/nested2.component';
import { Nested3Component } from './nested3/nested3.component';

export const OthersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'gallery',
      component: AppGalleryComponent,
      data: { title: 'Gallery', breadcrumb: 'GALLERY' }
    }, {
      path: 'pricing',
      component: AppPricingComponent,
      data: { title: 'Pricing', breadcrumb: 'PRICINGS' }
    }, {
      path: 'users',
      component: AppUsersComponent,
      data: { title: 'Users', breadcrumb: 'USERS' }
    }, {
      path: 'blank',
      component: AppBlankComponent,
      data: { title: 'Blank', breadcrumb: 'BLANK' }
    }, {
      path: 'n1',
      component: Nested1Component,
      data: { title: '1', breadcrumb: '1' }
    }, {
      path: 'n1/n2',
      component: Nested2Component,
      data: { title: '2', breadcrumb: '2' }
    }, {
      path: 'n1/n3',
      component: Nested3Component,
      data: { title: '3', breadcrumb: '3' }
    }]
  }
];