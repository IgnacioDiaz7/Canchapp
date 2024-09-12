import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManquecuraVLCPageRoutingModule } from './manquecura-vlc-routing.module';

import { ManquecuraVLCPage } from './manquecura-vlc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManquecuraVLCPageRoutingModule
  ],
  declarations: [ManquecuraVLCPage]
})
export class ManquecuraVLCPageModule {}
