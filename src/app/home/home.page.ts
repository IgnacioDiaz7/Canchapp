import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modal:any;
  modal2:any;
  modal3:any;
  modal4:any;
  modal5:any;
  

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
    });

    loading.present();
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  

}
