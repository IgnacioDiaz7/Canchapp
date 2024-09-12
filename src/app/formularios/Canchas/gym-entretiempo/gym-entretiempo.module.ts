import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymEntretiempoPageRoutingModule } from './gym-entretiempo-routing.module';

import { GymEntretiempoPage } from './gym-entretiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymEntretiempoPageRoutingModule
  ],
  declarations: [GymEntretiempoPage]
})
export class GymEntretiempoPageModule {}
