import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymMunQuilicuraPageRoutingModule } from './gym-mun-quilicura-routing.module';

import { GymMunQuilicuraPage } from './gym-mun-quilicura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymMunQuilicuraPageRoutingModule
  ],
  declarations: [GymMunQuilicuraPage]
})
export class GymMunQuilicuraPageModule {}
