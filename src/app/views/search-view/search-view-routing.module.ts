import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
    {
        path: '',
        component: ResultPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchViewRoutingModule { }
