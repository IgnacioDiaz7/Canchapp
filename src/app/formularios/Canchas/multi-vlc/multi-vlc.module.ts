import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiVLCPageRoutingModule } from './multi-vlc-routing.module';

import { MultiVLCPage } from './multi-vlc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiVLCPageRoutingModule
  ],
  declarations: [MultiVLCPage]
})
export class MultiVLCPageModule {}
