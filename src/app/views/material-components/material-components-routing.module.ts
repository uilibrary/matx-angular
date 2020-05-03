import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatKitsComponent } from '../material-components/mat-kits/mat-kits.component';


const routes: Routes = [
  {
    path: '',
    component: MatKitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MaterialComponentsRoutingModule { }
