import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymEntretiempoPage } from './gym-entretiempo.page';

const routes: Routes = [
  {
    path: '',
    component: GymEntretiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymEntretiempoPageRoutingModule {}
