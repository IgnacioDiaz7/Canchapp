import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManquecuraVLCPage } from './manquecura-vlc.page';

const routes: Routes = [
  {
    path: '',
    component: ManquecuraVLCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManquecuraVLCPageRoutingModule {}
