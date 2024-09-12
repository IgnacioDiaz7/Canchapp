import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanchasDUOCPageRoutingModule } from './canchas-duoc-routing.module';

import { CanchasDUOCPage } from './canchas-duoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanchasDUOCPageRoutingModule
  ],
  declarations: [CanchasDUOCPage]
})
export class CanchasDUOCPageModule {}
