import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymMunQuilicuraPage } from './gym-mun-quilicura.page';

const routes: Routes = [
  {
    path: '',
    component: GymMunQuilicuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymMunQuilicuraPageRoutingModule {}
